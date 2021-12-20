
const element = document.querySelector('.js-background');

function handlergetText(event){
    const current = event.currentTarget;
    if(current.key ==='r'){
        element.classList.add('red');
    } else if(current.key==='m'){
        element.classList.add('morado');
    }
}

element.addEventListener('click', handlergetText);