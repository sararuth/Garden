const Plant=require("./Plant")

const imageArr=[
  "http://exchangedownloads.smarttech.com/public/content/22/222feb2e-1e53-48a2-bf32-a3b9a32d3af7/previews/medium/0001.png",
  "https://openclipart.org/image/2400px/svg_to_png/243937/rose-red.png",
  "https://i.pinimg.com/originals/a9/c3/30/a9c3308b41be15693a29e59342d52b64.png"
 ];


class Rose extends Plant{
  constructor(x, y, initialHeight, growthRate, waterConsumption){
    let imageUrl=imageArr[Math.floor(Math.random() * 3)];
    super(imageUrl, x, y, initialHeight, growthRate, waterConsumption);
    this._hasBloomed=false;
  }
  
  get hasBloomed(){
    return this._hasBloomed; 
  }

  set hasBloomed(value){
    this._hasBloomed=value;
  }

  passDay(){
    super.passDay();
    if (this.health===0){
      this._hasBloomed=true;
    }
  } 
 // 
}
  module.exports=Rose