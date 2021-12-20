'use strict';

const input = document.querySelector('.js-input');
const list = document.querySelector('.js-text');

function getValue(){
list.innerHTML = input.value;
localStorage.setItem('name', input.value); 
}

function handlerWrite(){
input.value = localStorage.getItem('name')
list.innerHTML += localStorage.getItem('name');
}



//listener
input.addEventListener('keyup',getValue);
window.addEventListener('load', handlerWrite);