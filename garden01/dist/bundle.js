/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Garden.js":
/*!***********************!*\
  !*** ./src/Garden.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Weed=__webpack_require__(/*! ./Weed */ "./src/Weed.js");
const OrangeTree=__webpack_require__(/*! ./OrangeTree */ "./src/OrangeTree.js");
const Rose=__webpack_require__(/*! ./Rose */ "./src/Rose.js");

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


/***/ }),

/***/ "./src/OrangeTree.js":
/*!***************************!*\
  !*** ./src/OrangeTree.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Plant=__webpack_require__(/*! ./Plant */ "./src/Plant.js");


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

/***/ }),

/***/ "./src/Plant.js":
/*!**********************!*\
  !*** ./src/Plant.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/Rose.js":
/*!*********************!*\
  !*** ./src/Rose.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Plant=__webpack_require__(/*! ./Plant */ "./src/Plant.js")

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

/***/ }),

/***/ "./src/Weed.js":
/*!*********************!*\
  !*** ./src/Weed.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Plant=__webpack_require__(/*! ./Plant */ "./src/Plant.js")

class Weed extends Plant{
  constructor(imageUrl, x, y, initialHeight, growthRate, waterConsumption){
    super(imageUrl, x, y, initialHeight, growthRate, waterConsumption)
  } 
} 
module.exports=Weed

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Garden=__webpack_require__(/*! ./Garden */ "./src/Garden.js")
const Rose=__webpack_require__(/*! ./Rose */ "./src/Rose.js")
const Plant=__webpack_require__(/*! ./Plant */ "./src/Plant.js")
const OrangeTree=__webpack_require__(/*! ./OrangeTree */ "./src/OrangeTree.js")
const Weed=__webpack_require__(/*! ./Weed */ "./src/Weed.js")


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhcmRlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JhbmdlVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxXQUFXLG1CQUFPLENBQUMsNkJBQVE7QUFDM0IsaUJBQWlCLG1CQUFPLENBQUMseUNBQWM7QUFDdkMsV0FBVyxtQkFBTyxDQUFDLDZCQUFROztBQUUzQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLG9CQUFvQjtBQUNwQixrRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7O0FDbElBLFlBQVksbUJBQU8sQ0FBQywrQkFBUzs7O0FBRzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQTtBQUNBLHlCOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9COzs7Ozs7Ozs7OztBQy9CQSxZQUFZLG1CQUFPLENBQUMsK0JBQVM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7QUFDQTtBQUNBLHFCOzs7Ozs7Ozs7OztBQ2hDQSxZQUFZLG1CQUFPLENBQUMsK0JBQVM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQSxDO0FBQ0EsbUI7Ozs7Ozs7Ozs7O0FDUEEsYUFBYSxtQkFBTyxDQUFDLGlDQUFVO0FBQy9CLFdBQVcsbUJBQU8sQ0FBQyw2QkFBUTtBQUMzQixZQUFZLG1CQUFPLENBQUMsK0JBQVM7QUFDN0IsaUJBQWlCLG1CQUFPLENBQUMseUNBQWM7QUFDdkMsV0FBVyxtQkFBTyxDQUFDLDZCQUFROzs7QUFHM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsTyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IFdlZWQ9cmVxdWlyZSgnLi9XZWVkJyk7XG5jb25zdCBPcmFuZ2VUcmVlPXJlcXVpcmUoJy4vT3JhbmdlVHJlZScpO1xuY29uc3QgUm9zZT1yZXF1aXJlKCcuL1Jvc2UnKTtcblxuY29uc3Qgb3JhbmdlSW1nPVwiaHR0cDovL3d3dy5jbGtlci5jb20vY2xpcGFydHMvMi84LzEvNC8xMTk0OTg2MTgwMTk3MzQ1OTMxOW9yYW5nZV9zaW1wbGUuc3ZnLmhpLnBuZ1wiO1xuXG5cbmNsYXNzIEdhcmRlbntcbiAgY29uc3RydWN0b3IgKGdhcmRlbkFnZSl7XG4gICAgdGhpcy5fcGxhbnRBcnI9W107XG4gICAgdGhpcy5fcGxhbnRBZ2U9MDtcbiAgICB0aGlzLmdhcmRlbkFnZT1nYXJkZW5BZ2U7IFxuICB9XG5cbiAgYWRkUGxhbnQocGxhbnQpe1xuICAgIHRoaXMuX3BsYW50QXJyLnB1c2gocGxhbnQpO1xuICB9XG5cbiAgZ2V0IHBsYW50cygpe1xuICAgIHJldHVybiB0aGlzLl9wbGFudEFycjtcbiAgfVxuXG4gIGdldCBhZ2UoKXtcbiAgICByZXR1cm4gdGhpcy5fcGxhbnRBZ2U7XG4gIH1cblxuICBwYXNzRGF5KCl7XG4gICAgZm9yIChsZXQgcGxhbnQgb2YgdGhpcy5fcGxhbnRBcnIpe1xuICAgICAgcGxhbnQucGFzc0RheSgpO1xuICAgIH1cbiAgICB0aGlzLl9wbGFudEFnZSs9MTtcbiAgfVxuXG4gXG5cbiAgcmVuZGVyKGNvbnRhaW5lcil7IC8qcmVuZGVycyB0aGUgZ2FyZGVuKi9cbiAgICBjb25zdCBuZXdQbGFudEFyciA9IHRoaXMucGxhbnRzLm1hcCgocGxhbnQpPT57IFxuICAgICAgY29udGFpbmVyLmlubmVySFRNTD1cIlwiO1xuICAgICAgY29uc3QgcGxhbnRXcmFwcGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxhbnRXcmFwcGVyLmNsYXNzTmFtZT1cInBsYW50V3JhcHBlclwiO1xuICAgICAgY29uc3QgcGxhbnRJbWc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpZiAocGxhbnQgaW5zdGFuY2VvZiBPcmFuZ2VUcmVlKXtcbiAgICAgICAgcGxhbnRJbWcuY2xhc3NOYW1lPVwib3JhbmdlLXRyZWUtaW1nXCI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChwbGFudCBpbnN0YW5jZW9mIFdlZWQpe1xuICAgICAgICBwbGFudEltZy5jbGFzc05hbWU9XCJ3ZWVkLWltZ1wiO1xuICAgICAgfVxuICAgICAgaWYgKHBsYW50IGluc3RhbmNlb2YgUm9zZSl7XG4gICAgICAgIHBsYW50SW1nLmNsYXNzTmFtZT1cInJvc2UtaW1nXCJcbiAgICAgIH1cblxuICAgICAgcGxhbnRJbWcuc3JjPXBsYW50Ll9pbWFnZVVybDtcbiAgICAgIHBsYW50SW1nLmhlaWdodD1wbGFudC5fY3VycmVudEhlaWdodDsgXG4gICAgICBwbGFudEltZy5zdHlsZS5vcGFjaXR5PShwbGFudC5oZWFsdGgvMzApO1xuICAgICAgcGxhbnRXcmFwcGVyLmFwcGVuZENoaWxkKHBsYW50SW1nKVxuICAgICAgXG4gICAgICBpZiggcGxhbnQgaW5zdGFuY2VvZiBPcmFuZ2VUcmVlICl7XG4gICAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBwbGFudC5mcnVpdHM7IGkrKyApe1xuICAgICAgICAgICAgY29uc3QgZnJ1aXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBmcnVpdC5jbGFzc05hbWU9XCJmcnVpdC1pbWdcIlxuICAgICAgICAgICAgZnJ1aXQuc3JjPSBvcmFuZ2VJbWc7XG4gICAgICAgICAgICBmcnVpdC5oZWlnaHQ9cGxhbnQuX2N1cnJlbnRIZWlnaHQ7XG4gICAgICAgICAgICAvLyBmcnVpdC5zdHlsZS5sZWZ0PTEqKGkqMTApO1xuICAgICAgICAgICAgLy8gZnJ1aXQuc3R5bGUudG9wPTEqKGkqMTApO1xuICAgICAgICAgICAgcGxhbnRXcmFwcGVyLmFwcGVuZENoaWxkKGZydWl0KVxuXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgXG4gICAgICByZXR1cm4gcGxhbnRXcmFwcGVyO1xuICAgIH0pO1xuXG4gICAgXG4gICAgICBmb3IgKGxldCBwbGFudCBvZiBuZXdQbGFudEFycil7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmdhcmRlbkFnZS5pbm5lckhUTUw9dGhpcy5hZ2U7XG4gICAgfVxuXG5cbiAgd2F0ZXJFdmVubHkod2F0ZXIpe1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGlmIChyYW5kb209PT0xKXtcbiAgICAgIGNvbnN0IHdlZWQgPSBuZXcgV2VlZChcImh0dHBzOi8vdG9wcG5nLmNvbS9wdWJsaWMvdXBsb2Fkcy9wcmV2aWV3L2dyYXNzLTExNTMwOTkyMzgyaHNjcW5pYzI1bi5wbmdcIixcbiAgICAgIHdpbmRvdy54LHdpbmRvdy55LDEwMCwxLDMpO1xuICAgICAgdGhpcy5hZGRQbGFudCh3ZWVkKTtcbiAgICAgIHdpbmRvdy54Kz0yMDA7XG4gICAgfVxuICAgIGxldCB3ZWVkcz10aGlzLnBsYW50cy5maWx0ZXIocGxhbnQ9PihwbGFudCBpbnN0YW5jZW9mIFdlZWQpKVxuICAgIGxldCByZXN0T2ZQbGFudHM9dGhpcy5wbGFudHMuZmlsdGVyKHBsYW50PT4hKHBsYW50IGluc3RhbmNlb2YgV2VlZCkpXG4gICAgbGV0IGluZGV4PTA7XG4gICAgbGV0IGluZGV4MT0wO1xuICAgIHdoaWxlKHdhdGVyICYmIHdlZWRzLmxlbmd0aD4wKXtcbiAgICAgIGlmKHdlZWRzW2luZGV4XS5oZWFsdGg8MzApe1xuICAgICAgICB3ZWVkc1tpbmRleF0uX3dhdGVyUmVjZWl2ZWQrPTE7ICAgICAgXG4gICAgICAgIHdhdGVyLS07XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB3ZWVkcy5zcGxpY2UoaW5kZXgsMSlcbiAgICAgIH1cbiAgICAgIGluZGV4Kys7XG4gICAgICBpbmRleCU9d2VlZHMubGVuZ3RoO1xuICAgIH1cbiAgICBcbiAgICB3aGlsZSh3YXRlciAmJiByZXN0T2ZQbGFudHMubGVuZ3RoPjApe1xuICAgICAgaWYgKHJlc3RPZlBsYW50c1tpbmRleDFdLmhlYWx0aDwzMCl7XG4gICAgICAgIHJlc3RPZlBsYW50c1tpbmRleDFdLl93YXRlclJlY2VpdmVkKz0xO1xuICAgICAgICB3YXRlci0tO1xuICAgICAgICBpZihyZXN0T2ZQbGFudHNbaW5kZXgxXSBpbnN0YW5jZW9mIFJvc2Upe1xuICAgICAgICAgIGlmKCFyZXN0T2ZQbGFudHNbaW5kZXgxXS5oYXNCbG9vbWVkKXtcbiAgICAgICAgICAgIGxldCByYW5kb209TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICAgICAgICAgIGlmIChyYW5kb209PT0wKXtcbiAgICAgICAgICAgICAgcmVzdE9mUGxhbnRzW2luZGV4MV0uaGFzQmxvb21lZD10cnVlO1xuICAgICAgICAgICAgcmVzdE9mUGxhbnRzW2luZGV4MV0uX2ltYWdlVXJsPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNy8xMS8wOS8xMi81My9yb3NlLTI5MzMzODZfOTYwXzcyMC5wbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmVzdE9mUGxhbnRzLnNwbGljZShpbmRleDEsIDEpXG4gICAgICB9XG4gICAgICBpbmRleDErKztcbiAgICAgIGluZGV4MSU9cmVzdE9mUGxhbnRzLmxlbmd0aDtcbiAgICB9XG5cbiAgfVxufVxuICAgIFxuICBcbiAgbW9kdWxlLmV4cG9ydHM9R2FyZGVuICBcbiIsImNvbnN0IFBsYW50PXJlcXVpcmUoXCIuL1BsYW50XCIpO1xuXG5cbmNsYXNzIE9yYW5nZVRyZWUgZXh0ZW5kcyBQbGFudHtcbiAgY29uc3RydWN0b3IoaW1hZ2VVcmwsIHgsIHksIGluaXRpYWxIZWlnaHQsIGdyb3d0aFJhdGUsIHdhdGVyQ29uc3VtcHRpb24sIG9uRnJ1aXQpe1xuICAgIHN1cGVyKGltYWdlVXJsLCB4LCB5LCBpbml0aWFsSGVpZ2h0LCBncm93dGhSYXRlLCB3YXRlckNvbnN1bXB0aW9uKTtcbiAgICB0aGlzLmZydWl0cyA9IDA7XG5cbiAgfVxuICBhZGRGcnVpdCgpe1xuICAgIC8vdGhpcy5mcnVpdHMrKztcbiAgICBpZiAodGhpcy5mcnVpdHM8PTMpe1xuICAgICAgdGhpcy5mcnVpdHMrKztcbiAgICB9XG4gIH0gXG59XG5tb2R1bGUuZXhwb3J0cz1PcmFuZ2VUcmVlIiwiY2xhc3MgUGxhbnR7XG4gIGNvbnN0cnVjdG9yKGltYWdlVXJsLCB4LCB5LCBpbml0aWFsSGVpZ2h0LCBncm93dGhSYXRlLCB3YXRlckNvbnN1bXB0aW9uKXtcbiAgICB0aGlzLl9pbWFnZVVybD1pbWFnZVVybDtcbiAgICB0aGlzLl94PXg7XG4gICAgdGhpcy5feT15O1xuICAgIHRoaXMuX2luaXRpYWxIZWlnaHQ9aW5pdGlhbEhlaWdodDtcbiAgICB0aGlzLl9ncm93dGhSYXRlPWdyb3d0aFJhdGU7XG4gICAgdGhpcy5fd2F0ZXJDb25zdW1wdGlvbj13YXRlckNvbnN1bXB0aW9uO1xuICAgIHRoaXMuX2N1cnJlbnRIZWlnaHQ9aW5pdGlhbEhlaWdodDtcbiAgICB0aGlzLl93YXRlclJlY2VpdmVkPTMwO1xuICAgIHRoaXMuX2FnZT0wO1xuICAgIHRoaXMuX29wYWNpdHk9MTtcbiAgfVxuICBwYXNzRGF5KCl7XG4gICAgdGhpcy5fY3VycmVudEhlaWdodCs9IHRoaXMuX2dyb3d0aFJhdGU7XG4gICAgdGhpcy5feS09dGhpcy5fZ3Jvd3RoUmF0ZTtcbiAgICB0aGlzLl9hZ2UrPTE7XG4gIH1cblxuICBnZXQgaGVhbHRoKCl7XG4gICAgcmV0dXJuICh0aGlzLl93YXRlclJlY2VpdmVkIC0gKHRoaXMuX2FnZSAqIHRoaXMuX3dhdGVyQ29uc3VtcHRpb24pKTtcbiAgfVxuICBtb3JlT3BhY2l0eSgpe1xuICAgIHRoaXMuX29wYWNpdHktPTAuMDU7XG4gIH1cblxuICBsZXNzT3BhY2l0eSgpe1xuICAgIHRoaXMuX29wYWNpdHkrPTAuMDU7XG4gIH1cbiAgXG59XG5tb2R1bGUuZXhwb3J0cz1QbGFudCIsImNvbnN0IFBsYW50PXJlcXVpcmUoXCIuL1BsYW50XCIpXG5cbmNvbnN0IGltYWdlQXJyPVtcbiAgXCJodHRwOi8vZXhjaGFuZ2Vkb3dubG9hZHMuc21hcnR0ZWNoLmNvbS9wdWJsaWMvY29udGVudC8yMi8yMjJmZWIyZS0xZTUzLTQ4YTItYmYzMi1hM2I5YTMyZDNhZjcvcHJldmlld3MvbWVkaXVtLzAwMDEucG5nXCIsXG4gIFwiaHR0cHM6Ly9vcGVuY2xpcGFydC5vcmcvaW1hZ2UvMjQwMHB4L3N2Z190b19wbmcvMjQzOTM3L3Jvc2UtcmVkLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9hOS9jMy8zMC9hOWMzMzA4YjQxYmUxNTY5M2EyOWU1OTM0MmQ1MmI2NC5wbmdcIlxuIF07XG5cblxuY2xhc3MgUm9zZSBleHRlbmRzIFBsYW50e1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBpbml0aWFsSGVpZ2h0LCBncm93dGhSYXRlLCB3YXRlckNvbnN1bXB0aW9uKXtcbiAgICBsZXQgaW1hZ2VVcmw9aW1hZ2VBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldO1xuICAgIHN1cGVyKGltYWdlVXJsLCB4LCB5LCBpbml0aWFsSGVpZ2h0LCBncm93dGhSYXRlLCB3YXRlckNvbnN1bXB0aW9uKTtcbiAgICB0aGlzLl9oYXNCbG9vbWVkPWZhbHNlO1xuICB9XG4gIFxuICBnZXQgaGFzQmxvb21lZCgpe1xuICAgIHJldHVybiB0aGlzLl9oYXNCbG9vbWVkOyBcbiAgfVxuXG4gIHNldCBoYXNCbG9vbWVkKHZhbHVlKXtcbiAgICB0aGlzLl9oYXNCbG9vbWVkPXZhbHVlO1xuICB9XG5cbiAgcGFzc0RheSgpe1xuICAgIHN1cGVyLnBhc3NEYXkoKTtcbiAgICBpZiAodGhpcy5oZWFsdGg9PT0wKXtcbiAgICAgIHRoaXMuX2hhc0Jsb29tZWQ9dHJ1ZTtcbiAgICB9XG4gIH0gXG4gLy8gXG59XG4gIG1vZHVsZS5leHBvcnRzPVJvc2UiLCJjb25zdCBQbGFudD1yZXF1aXJlKFwiLi9QbGFudFwiKVxuXG5jbGFzcyBXZWVkIGV4dGVuZHMgUGxhbnR7XG4gIGNvbnN0cnVjdG9yKGltYWdlVXJsLCB4LCB5LCBpbml0aWFsSGVpZ2h0LCBncm93dGhSYXRlLCB3YXRlckNvbnN1bXB0aW9uKXtcbiAgICBzdXBlcihpbWFnZVVybCwgeCwgeSwgaW5pdGlhbEhlaWdodCwgZ3Jvd3RoUmF0ZSwgd2F0ZXJDb25zdW1wdGlvbilcbiAgfSBcbn0gXG5tb2R1bGUuZXhwb3J0cz1XZWVkIiwiY29uc3QgR2FyZGVuPXJlcXVpcmUoJy4vR2FyZGVuJylcbmNvbnN0IFJvc2U9cmVxdWlyZSgnLi9Sb3NlJylcbmNvbnN0IFBsYW50PXJlcXVpcmUoJy4vUGxhbnQnKVxuY29uc3QgT3JhbmdlVHJlZT1yZXF1aXJlKCcuL09yYW5nZVRyZWUnKVxuY29uc3QgV2VlZD1yZXF1aXJlKCcuL1dlZWQnKVxuXG5cbmNvbnN0IGJ0blBsYW50Um9zZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blBsYW50Um9zZVwiKTtcbmNvbnN0IGJ0blBsYW50T3JhbmdlVHJlZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blBsYW50T3JhbmdlVHJlZVwiKTtcbmNvbnN0IGJ0blBhc3NEYXk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5QYXNzRGF5XCIpO1xuY29uc3QgY29udGFpbmVyMj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lcjJcIik7XG5jb25zdCBnYXJkZW5BZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYXJkZW5BZ2VcIik7XG5jb25zdCBnYXJkZW4gPSBuZXcgR2FyZGVuKGdhcmRlbkFnZSk7XG5cblxud2luZG93Lng9MDtcbndpbmRvdy55PTQwMDtcbmJ0blBsYW50Um9zZS5vbmNsaWNrPWZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJvc2U9IG5ldyBSb3NlKHgsIHksIDIwMCwgMiwgMSk7XG4gIGdhcmRlbi5hZGRQbGFudChyb3NlKTtcbiAgZ2FyZGVuLnJlbmRlcihjb250YWluZXIyKTtcbiAgeCs9MjAwO1xufVxuXG5idG5QYXNzRGF5Lm9uY2xpY2s9ZnVuY3Rpb24gKCl7XG4gIGdhcmRlbi5wYXNzRGF5KCk7XG4gIGdhcmRlbi5yZW5kZXIoY29udGFpbmVyMik7XG4gICAgXG59XG5cblxuY29uc3QgYnRuV2F0ZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5XYXRlclwiKTtcbmJ0bldhdGVyLm9uY2xpY2s9ZnVuY3Rpb24oKXtcbiAgZ2FyZGVuLndhdGVyRXZlbmx5KDEwKTtcbiAgZ2FyZGVuLnJlbmRlcihjb250YWluZXIyKTtcbn1cblxuXG5idG5QbGFudE9yYW5nZVRyZWUub25jbGljaz1mdW5jdGlvbigpe1xuICBjb25zdCB0cmVlPSBuZXcgT3JhbmdlVHJlZShcImh0dHBzOi8vZHVtaWVsYXV4ZXBpY2VzLm5ldC9zaXRlcy9kZWZhdWx0L2ZpbGVzL3RyZWUtY2xpcGFydC1zY2hvb2wtODA0MzEwLTQzMTQ5NzYucG5nXCIsXG4gIHgseSwzMDAsMywxKTtcbiAgZ2FyZGVuLmFkZFBsYW50KHRyZWUpO1xuICBnYXJkZW4ucmVuZGVyKGNvbnRhaW5lcjIpO1xuICB4Kz0yMDA7XG59IFxuXG5cbnNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gIC8vY29uc29sZS5sb2coJ2FkZCBmcnVpdCcpO1xuICBmb3IoIGxldCBnIG9mIGdhcmRlbi5wbGFudHMgKXtcbiAgICAgIGlmIChnIGluc3RhbmNlb2YgT3JhbmdlVHJlZSl7XG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcbiAgICAgICAgaWYociA9PSAwKXtcbiAgICAgICAgICBnLmFkZEZydWl0KCk7XG4gICAgICAgICAgZ2FyZGVuLnJlbmRlcihjb250YWluZXIyKVxuICAgICAgICB9XG4gICAgICB9XG4gIH1cbn0sMTAwMCk7Il0sInNvdXJjZVJvb3QiOiIifQ==