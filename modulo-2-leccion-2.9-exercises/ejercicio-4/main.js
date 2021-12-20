"use strict";

const listElement = document.querySelector('.js-list');

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

let html;

function paintHtml(){
  for (let index = 0; index < tasks.length; index++) {
      listElement.innerHTML += `<li class="completed"><input type="checkbox" id=${index} class="js-complet" checked>
    ${tasks[index].name}
    </li>`; 
}};
paintHtml();

const complete = document.querySelectorAll('.js-complet')
for(const handler of complete){
  handler.addEventListener('click', handlerClickCheck);
}

function handlerClickCheck(event){
const currentTarget = event.currentTarget.id;
if(tasks[currentTarget].completed === true){
  tasks[currentTarget].completed = false;
  event.currentTarget.parentNode.classList.toggle('completed');
}else if(tasks[currentTarget].completed === false){
  tasks[currentTarget].completed = true;
  event.currentTarget.parentNode.classList.toggle('completed');
}
}



