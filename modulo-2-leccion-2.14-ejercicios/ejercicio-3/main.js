'use strict';

let counter = 0;

function getTime(){
    counter++;   
    const time = document.querySelector('.time');
    time.innerHTML = `Escrito hace ${counter} segundos`;
    if(counter >= 60){
    time.innerHTML = `Escrito hace 1 minuto`; 
    }    
}


setInterval(getTime,1000);