const Weed=require('./Weed');
const OrangeTree=require('./OrangeTree');
const Rose=require('./Rose');

const orangeImg="http://www.clker.com/cliparts/2/8/1/4/11949861801973459319orange_simple.svg.hi.png";


class Garden{
  constructor (gardenAge){
    this._plantArr=[];
    this._plantAge=0;
    this.gardenAge=gardenAge; 
  }

  addPlant(plant){
    this._plantArr.push(plant);
  }

  get plants(){
    return this._plantArr;
  }

  get age(){
    return this._plantAge;
  }

  passDay(){
    for (let plant of this._plantArr){
      plant.passDay();
    }
    this._plantAge+=1;
  }

 

  render(container){ /*renders the garden*/
    const newPlantArr = this.plants.map((plant)=>{ 
      container.innerHTML="";
      const plantWrapper=document.createElement('div');
      plantWrapper.className="plantWrapper";
      const plantImg=document.createElement('img');
      if (plant instanceof OrangeTree){
        plantImg.className="orange-tree-img";
      }
      
      if (plant instanceof Weed){
        plantImg.className="weed-img";
      }
      if (plant instanceof Rose){
        plantImg.className="rose-img"
      }

      plantImg.src=plant._imageUrl;
      plantImg.height=plant._currentHeight; 
      plantImg.style.opacity=(plant.health/30);
      plantWrapper.appendChild(plantImg)
      
      if( plant instanceof OrangeTree ){
          for( let i = 0; i < plant.fruits; i++ ){
            const fruit=document.createElement('img');
            fruit.className="fruit-img"
            fruit.src= orangeImg;
            fruit.height=plant._currentHeight;
            // fruit.style.left=1*(i*10);
            // fruit.style.top=1*(i*10);
            plantWrapper.appendChild(fruit)

          }
      }
   
      return plantWrapper;
    });

    
      for (let plant of newPlantArr){
        container.appendChild(plant);
      }
      this.gardenAge.innerHTML=this.age;
    }


  waterEvenly(water){
    const random = Math.floor(Math.random() * 2);
    if (random===1){
      const weed = new Weed("https://toppng.com/public/uploads/preview/grass-11530992382hscqnic25n.png",
      window.x,window.y,100,1,3);
      this.addPlant(weed);
      window.x+=200;
    }
    let weeds=this.plants.filter(plant=>(plant instanceof Weed))
    let restOfPlants=this.plants.filter(plant=>!(plant instanceof Weed))
    let index=0;
    let index1=0;
    while(water && weeds.length>0){
      if(weeds[index].health<30){
        weeds[index]._waterReceived+=1;      
        water--;
      }
      else{
        weeds.splice(index,1)
      }
      index++;
      index%=weeds.length;
    }
    
    while(water && restOfPlants.length>0){
      if (restOfPlants[index1].health<30){
        restOfPlants[index1]._waterReceived+=1;
        water--;
        if(restOfPlants[index1] instanceof Rose){
          if(!restOfPlants[index1].hasBloomed){
            let random=Math.floor(Math.random() * 2)
            if (random===0){
              restOfPlants[index1].hasBloomed=true;
            restOfPlants[index1]._imageUrl="https://cdn.pixabay.com/photo/2017/11/09/12/53/rose-2933386_960_720.png"
            }
          }
        }
      }
      else{
        restOfPlants.splice(index1, 1)
      }
      index1++;
      index1%=restOfPlants.length;
    }

  }
}
    
  
module.exports=Garden  
