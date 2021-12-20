"use strict";

function tree(height){
  for(let i = 0; i<height;i++){
    let count = "";
    for(let x = 0; x < i + 1; x++){
      count = count + "▲";
    }
    count.push('★');
    console.log(count);
  }
}
tree(5);