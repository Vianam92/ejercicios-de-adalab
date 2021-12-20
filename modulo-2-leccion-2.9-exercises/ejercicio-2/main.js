'use strict';

function get100Numbers(){
let array = [];
    for(let i = 0 ; i <=100; i++){
        array.push(i);
    }
   return array;
}
console.log(get100Numbers());

function getReversed100Numbers(){
    console.log(get100Numbers().reverse());
}

console.log(getReversed100Numbers());