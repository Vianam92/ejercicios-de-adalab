'use strict';

const divElement = document.querySelector('.js-background');

function getTecla(eve){
const currentTarget = eve.currentTarget;
if(currentTarget.key ==='r'){
  divElement.classList.add('red');
} else if(currentTarget.key === 'm'){
  divElement.classList.add('morado');
}

divElement.addEventListener('keyup', getTecla);
