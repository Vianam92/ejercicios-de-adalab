"use strict";

//ejercicio 3
const lostNumbers = [4, 8, 15, 16, 23, 42];

let arrayPares = [];
let arrayMultiplos = [];

function bestLostNumber() {
  for (const numbers of lostNumbers) {
    if (numbers % 2 === 0) {
      arrayPares.push(numbers);
    }
    if(numbers % 3 === 0){
        arrayMultiplos.push(numbers);
    }
  }
}
bestLostNumber()
const concatenacion = arrayPares.concat(arrayMultiplos);

console.log(concatenacion);

