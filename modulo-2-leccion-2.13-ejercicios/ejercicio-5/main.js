"use strict";

const pins = [2389, 2384, 2837, 5232, 8998];

const filterPins = pins.filter(number =>{
   if(number%2===0){
    console.log(number)
  }
}
 );