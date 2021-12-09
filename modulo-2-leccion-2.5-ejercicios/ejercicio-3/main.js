'use strict'

const elementClass = document.querySelector('.js-text');

//handler
const ipsum = (eve) => {
    elementClass.innerHTML += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat dicta facilis, vero sit ut doloribusreprehenderit fugiat nulla, accusantium laudantium explicabo magnam animi, perspiciatis esse dolorem saepedeleniti. Nam!";
console.log(eve);
}

//listener
elementClass.addEventListener('mouseover', ipsum);

/*Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.*/