'use strict';

const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const list = document.querySelector('.js-list');

function getPeople(){
fetch(`https://swapi.py4e.com/api/people/?search=${input.value}`)
.then(response => response.json())
.then(data => {
    console.log(data);
    const dataResult = data.results;
    list.innerHTML = '';
    for(let i = 0; i< dataResult.length; i++){
    list.innerHTML += `<li>Nombre: ${dataResult[i].name} genero: ${dataResult[i].gender}</li>`;
    }
})
}




//listener
btn.addEventListener('click',getPeople);