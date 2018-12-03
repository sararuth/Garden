const Garden=require('./Garden')
const Rose=require('./Rose')
const Plant=require('./Plant')
const OrangeTree=require('./OrangeTree')
const Weed=require('./Weed')


const btnPlantRose=document.querySelector(".btnPlantRose");
const btnPlantOrangeTree=document.querySelector(".btnPlantOrangeTree");
const btnPassDay=document.querySelector(".btnPassDay");
const container2=document.querySelector(".container2");
const gardenAge=document.querySelector(".gardenAge");
const garden = new Garden(gardenAge);


window.x=0;
window.y=400;
btnPlantRose.onclick=function(){
  const rose= new Rose(x, y, 200, 2, 1);
  garden.addPlant(rose);
  garden.render(container2);
  x+=200;
}

btnPassDay.onclick=function (){
  garden.passDay();
  garden.render(container2);
    
}


const btnWater=document.querySelector(".btnWater");
btnWater.onclick=function(){
  garden.waterEvenly(10);
  garden.render(container2);
}


btnPlantOrangeTree.onclick=function(){
  const tree= new OrangeTree("https://dumielauxepices.net/sites/default/files/tree-clipart-school-804310-4314976.png",
  x,y,300,3,1);
  garden.addPlant(tree);
  garden.render(container2);
  x+=200;
} 


setInterval(function(){
  //console.log('add fruit');
  for( let g of garden.plants ){
      if (g instanceof OrangeTree){
        const r = Math.floor(Math.random() * 5);
        if(r == 0){
          g.addFruit();
          garden.render(container2)
        }
      }
  }
},1000);