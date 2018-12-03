const Plant=require("./Plant")

class Weed extends Plant{
  constructor(imageUrl, x, y, initialHeight, growthRate, waterConsumption){
    super(imageUrl, x, y, initialHeight, growthRate, waterConsumption)
  } 
} 
module.exports=Weed