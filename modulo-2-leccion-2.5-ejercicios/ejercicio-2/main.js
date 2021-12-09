'use strict'

const input = document.querySelector('.js-input');
const button = document.querySelector('button');

const handler = () => console.log(`Hola ${input.value}`);

//listener
button.addEventListener('click', handler);


/*
Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.*/