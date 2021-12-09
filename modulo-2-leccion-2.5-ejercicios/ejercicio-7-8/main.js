'use strict';

const buttonElement = document.querySelector('.js_button');
const button2Element = document.querySelector('.js_button2');

//handler
function getStyleBtn(event){
  const selectButton = event.currentTarget;
  selectButton.classList.toggle('button');
}

buttonElement.addEventListener('click', getStyleBtn);
button2Element.addEventListener('click', getStyleBtn);
