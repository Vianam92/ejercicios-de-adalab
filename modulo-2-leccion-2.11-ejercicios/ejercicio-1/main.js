'use strict';

function getInformation(){
 fetch('https://swapi.py4e.com/api/')
 .then(response => response.json())
 .then(data => {
console.log(data);
//return fetch("https://swapi.py4e.com/api/people/")
return fetch("https://swapi.py4e.com/api/films/")
 }).then(response => response.json())
 .then(films => {
     console.log(films);
//return fetch("https://swapi.py4e.com/api/people/1")
 }) 
}

getInformation();

//no necesita autentificación
//metodo Get ya que solo solicitamos información.
//para acceder al nombre de Luke "https://swapi.py4e.com/api/people/1";

//URL para acceder a la info de la película "A New Hope" https://swapi.py4e.com/api/films/1;

//a qué otros recursos puedo acceder desde el API además de personajes y pelis
//planets/species/starships/vehicles.

//URL para acceder al listado de personajes, ¿está paginada?
//https://swapi.py4e.com/api/people       Si esta paginada https://swapi.py4e.com/api/people/?page=2

//cómo puedo buscar personajes mediante la URL
//cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee
// añadiendo ?format=wookiee  a las urls --> https://swapi.py4e.com/api/people/1/?format=wookiee