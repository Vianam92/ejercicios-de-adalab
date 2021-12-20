'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// TÚ CÓDIGO AQUÍ

const divClass = document.querySelector('.js-result');

//ejercicio 1
//Pintar mi listado
function paintListHtml(){
  let html = '';
  for(const item of promos){
    console.log(item);
    html += `<li>${item.name}</li>`
  }
  divClass.innerHTML += html;
}

//ejercicio 2
let html = '';

function paintList2Html(){
  //for(const item of promos){
  //html += `<li>${item.name}</li>`;
 // html += `<li>${item.promo}</li>`;
 for (let i = 0; i < promos.length; i++) {
   html += `<p>Nombre: ${promos[i].name}</p>`;
   html += `<p>Promo: ${promos[i].promo}</p>`;
 }
 divClass.innerHTML += html;
  }

// ejercicio 3
function paintList3HTML(){
for(const item of promos) {
  html += `<p>Nombre: ${item.name}</p>`;
  html += `<p>Promo: ${item.promo}</p>`;
  html += `<p>Número de alumnas: ${item.students.length}</p>`;
  }
  divClass.innerHTML += html;
}

//ejercicio 4
function paintList4HTML(){
for(const item of promos){
  html += `<p>Nombre: ${item.name}</p>`;
  for (let i = 0; i < item.students.length; i++) {
    html += `
    <li>${item.students[i].name} ${item.students[i].age}</li>
    `
  }
}
  divClass.innerHTML += html;
}

//ejercicio 5
function paintList5HTML(){
  for(const item of promos){
    html += `<p>Nombre: ${item.name}</p>`;
    for (let i = 0; i < item.students.length; i++) {
      html += `<li id=${item.students[i].id}>${item.students[i].name} ${item.students[i].age}</li>`;
    }
  }
    divClass.innerHTML += html;
    console.log(html);
  }

//ejercicio 6
function paintList6HTML(){
for(const item of promos){
  html += `<p>Nombre: ${item.name}</p>`;
  for (let i = 0; i < item.students.length; i++) {
    if(item.students[i].age%2===0){
      html += `<li id=${item.students[i].id}>${item.students[i].name} ${item.students[i].age}</li>`;
    }
  }
}
divClass.innerHTML += html;
}

//ejercicio 7
function paintList7HTML(){


}