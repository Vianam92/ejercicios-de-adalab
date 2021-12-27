'use strict';

const inputElement = document.querySelector('.js-input');
const btnElement = document.querySelector('.js-btn');
const listElement = document.querySelector('.js-list');

const inputValue = inputElement.value;

const getUrl = () => {
  fetch(`https://api.github.com/orgs/${inputValue}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
}

getUrl();

btnElement.addEventListener('click', getUrl);