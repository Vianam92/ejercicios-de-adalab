'use strict'

//me traigo el element 

const btn = document.querySelector('.js-button');

function logueaObj(event){
    const currentTarget = event.currentTarget;
    console.log(currentTarget);
}


//listener
btn.addEventListener('click', logueaObj);