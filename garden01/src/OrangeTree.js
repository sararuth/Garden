const Plant=require("./Plant");


class OrangeTree extends Plant{
  constructor(imageUrl, x, y, initialHeight, growthRate, waterConsumption, onFruit){
    super(imageUrl, x, y, initialHeight, growthRate, waterConsumption);
    this.fruits = 0;

  }
  addFruit(){
    //this.fruits++;
    if (this.fruits<=3){
      this.fruits++;
    }
  } 
}
module.exports=OrangeTree