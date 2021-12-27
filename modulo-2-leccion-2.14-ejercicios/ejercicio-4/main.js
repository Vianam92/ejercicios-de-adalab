'use strict';

/*Con JavaScript, crear un código para mostrar una ventana en nuestro navegador una vez transcurridos 15 segundos que ponga "su sesión ha expirado" (creada usando HTML y CSS).*/

let counter = 0;

function getTime(){
counter++;
const time = document.querySelector('.time');
time.innerHTML = counter;

if(counter < 15){
alert("tu tiempo se ha agotado");
    }

}

setTimeout(getTime,1000);