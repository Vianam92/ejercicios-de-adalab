'use strict';

const inputElement = document.querySelector('.js-input');
const textElement = document.querySelector('.js-text');

function getInputValue(){
  const inputValue = inputElement.value;
  return inputValue;
}
function paintTextHtml(inputValue){
  textElement.innerHTML = inputValue;
}

function getValueInput (){
  paintTextHtml(getInputValue());
}

inputElement.addEventListener('keyup', getValueInput);






//Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.
//Nota: el objetivo es hacerlo utilizando event.currentTarget.