'use strict';

fetch("https://dog.ceo/dog-api")
.then(response => response.json())
.then(data => {
    console.log(data);
})