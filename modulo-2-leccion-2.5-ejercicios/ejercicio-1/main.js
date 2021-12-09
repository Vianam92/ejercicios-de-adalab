'use strict'

//traer la clase

const button = document.querySelector('.js-click');
const selectorText = document.querySelector('.js-mensaje');

//handler
function changeText(){
selectorText.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

//listener
button.addEventListener('click',changeText);


const buttonElement = document.querySelector('.button');

function handleButtonClick(event) {
  console.log(event.currentTarget);
}

buttonElement.addEventListener('click', handleButtonClick);