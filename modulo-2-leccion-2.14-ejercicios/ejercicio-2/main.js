'use strict';

let counter = 0;

function getTime(){
    if(counter<12){
     counter++;   
    }
    const time = document.querySelector('.time');
    time.innerHTML = `<p>${counter}</p>`;
    if(counter === 12){
    time.innerHTML += `<img src="./img/descarga.jpeg">`;
}
}

setInterval(getTime,1000);