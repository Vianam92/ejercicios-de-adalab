'use strict';

const select = document.querySelector('.js-select');
const images = document.querySelector('.js-images');

const newElement = document.createElement('img');

const getValue = () => {
    const cityOption = select.value;
    return cityOption;
}

const getImage = () => {
    newElement.setAttribute('src', '');
    newElement.setAttribute('class', 'images');
    images.appendChild(newElement);

    if(getValue() === 'madrid'){
        newElement.setAttribute('src', './images/Madrid.jpeg');
    }else if(getValue() === 'paris'){
        newElement.setAttribute('src', './images/Paris.jpeg');
    }
    else if(getValue() === 'new-york'){
        newElement.setAttribute('src', './images/New_York.jpeg');
    }
}

const handlerOptionCity = () => {
getImage();
}

//listener 
select.addEventListener('click', handlerOptionCity);
