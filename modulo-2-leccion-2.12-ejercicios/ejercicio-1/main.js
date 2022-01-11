"use strict";

const numbers = [1, 2, 3];

const list = document.querySelector('.js-list');

for(let i = 0; i < numbers.length;i++){
    //creamos el elemento
 const newItem = document.createElement('li');
 //creamos el contenido
 const newContent = document.createTextNode(`${numbers[i]}`)
 //Lo añadimos al li
 newItem.appendChild(newContent);
 //lo añadimos al Dom
 list.appendChild(newItem);
}

