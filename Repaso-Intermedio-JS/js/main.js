'use strict';

const updateBtn = document.querySelector('.js_button');
const faceSelect = document.querySelector('.js_select_face');
const faceTitle = document.querySelector('.js_face');
const divBackground = document.querySelector('.js_container');

function renderFace(face) {
faceTitle.innerHTML = face;
}

function changeFace(){
//get value.
const userValue = faceSelect.value;
//condicional
if(userValue === 'happy'){
renderFace(":)");
} else if(userValue === 'sad'){
renderFace(":(");
}
}

function getRandom(max){
return Math.round(Math.random() * max);
}

function changeBackground(){
//generar numero aleatorio
const randomNum = getRandom(100);
//comprobar si es par yellow
if(randomNum%2 === 0){
    divBackground.classList.remove('orange');
    divBackground.classList.add('yellow');
} else{
    divBackground.classList.remove('yellow');
    divBackground.classList.add('orange');
}
}

function handleClickUpdate(event){
    event.preventDefault();// siempre en la 1era linea del handler.
    changeFace();
    changeBackground();
}

updateBtn.addEventListener('click', handleClickUpdate);