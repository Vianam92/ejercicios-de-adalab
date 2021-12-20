'use strict';

const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const text = document.querySelector('.js-text');

//function
function getDocApi() {
  const inputValue = input.value;
  fetch(`https://api.github.com/users/${inputValue}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      text.innerHTML += `<li>Usuario: ${data.login}</li>`;
      text.innerHTML += `<li>Total Repositorios: ${data.public_repos}</li>`;
      text.innerHTML += `<img src="${data.avatar_url}"/>`;
      })
}

//listener
btn.addEventListener("click", getDocApi);

//nombre
//# de repositorios
//avatar(img)
