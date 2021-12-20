'use strict'

const adalaber1 = {
    name: "Susana",
    edad:35,
    profesión: 'periodista'
};

//metodo arrow funciones o funciones anónimas.
adalaber1.run = phrase => phrase;
adalaber1.runMarathon = distance => distance;

console.log(adalaber1.run('estoy corriendo'));

console.log(adalaber1.runMarathon(`Estoy corriendo un maratón de 50 kilometros`));



const adalaber2 = {};
adalaber2.name = 'Rocio';
adalaber2.edad = 25;
adalaber2.profesión= 'actriz'

console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.edad} y soy ${adalaber1.profesión}`);
console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.edad} y soy ${adalaber2.profesión}`);