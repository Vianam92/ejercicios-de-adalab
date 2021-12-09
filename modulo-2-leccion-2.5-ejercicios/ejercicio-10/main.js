'use strict';

const buttonElement = document.querySelector('.js-button');
const divContainer = document.querySelector('.js-container');

function painHtml(){
let moviesHtml = "";
moviesHtml += `<ul><li>Inception</li>`;
moviesHtml += `<li>The butterfly effect</li>`;
moviesHtml += `<li>Eternal sunshine of the spotless mind</li>`;
moviesHtml += `<li>Blue velvet</li>`;
moviesHtml += `<li>Split</li></ul>`;

return moviesHtml;
}

function handler(){
 divContainer.innerHTML = painHtml();
}

buttonElement.addEventListener('click', handler);

