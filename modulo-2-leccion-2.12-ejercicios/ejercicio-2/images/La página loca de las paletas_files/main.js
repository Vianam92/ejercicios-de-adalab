'use strict';

let colores = [];

const getData = () =>{
fetch('./data/palette.json')
.then(response => response.json())
.then(data => 
colores = data);
return colores;
}