'use strict';

const formElement = document.querySelector('.js-form');
const selectElement = document.querySelector('.js-select');

const data = [{
        name: 'Lisa',
        lastName: 'Simpson',
        phone: 456258,
        id:0
    },
    {
        name: 'Dory',
        lastName: 'Rodriguez',
        phone: 456258,
        id:1
    },
    {
        name: 'Melisa',
        lastName: 'Machado',
        phone: 456258,
        id:2
    },
]

const handlerClickSelect = (eve) =>{
const inputElement = document.querySelectorAll('.js-input');
const currentTarget = eve.currentTarget.value;
for(const element of inputElement){
    if(currentTarget){
        for(const user of data){
            if(currentTarget === user.name.toLowerCase()){
                element.value = user[element.id];
            }
        }
    }else{
        element.value = "";
    }
}
}

const paintSelect = () => {
for(const item of data){
const createOption = document.createElement('option');    
createOption.textContent = item.name;
createOption.value = item.name.toLowerCase();
selectElement.appendChild(createOption);
formElement.appendChild(selectElement);   
}
listenClickSelect();
}

const listenClickSelect = () =>{
    const element = document.querySelector('.js-select');
    element.addEventListener('change',handlerClickSelect);
}

paintSelect(); 