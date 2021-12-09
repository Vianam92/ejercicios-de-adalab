'use strict';

const constTeacher = document.querySelector('.teachers');

function searchElementTeacher() {
  if(constTeacher.querySelector('.teacher--selected')){
    constTeacher.classList.toggle('teacher--selected');
  }else{
    constTeacher.classList.toggle('teacher--selected');
  }
}

searchElementTeacher();
const teacherDiv = document.querySelector('.teacher');


function changeDivValor(){
  const divElement = teacherDiv.querySelector('.favorite');
  if(divElement.classList.contains('favorite')){
    divElement.innerHTML ='Quitar';
  }else{
    divElement.innerHTML ='Añadir';
  }
  
}


changeDivValor();




//Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
//Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.