class Plant{
  constructor(imageUrl, x, y, initialHeight, growthRate, waterConsumption){
    this._imageUrl=imageUrl;
    this._x=x;
    this._y=y;
    this._initialHeight=initialHeight;
    this._growthRate=growthRate;
    this._waterConsumption=waterConsumption;
    this._currentHeight=initialHeight;
    this._waterReceived=30;
    this._age=0;
    this._opacity=1;
  }
  passDay(){
    this._currentHeight+= this._growthRate;
    this._y-=this._growthRate;
    this._age+=1;
  }

  get health(){
    return (this._waterReceived - (this._age * this._waterConsumption));
  }
  moreOpacity(){
    this._opacity-=0.05;
  }

  lessOpacity(){
    this._opacity+=0.05;
  }
  
}
module.exports=Plant