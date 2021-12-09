"use strict";
const container = document.querySelector(".container");
let scrollVertical = 2027;

function scroll(){
  if(scrollVertical <= window.scrollY){
    container.classList.add('yellow');
    console.log('es yellow');
  } else{
    container.classList.add('red');
    console.log('es red');}
}

window.addEventListener('scroll', scroll);
