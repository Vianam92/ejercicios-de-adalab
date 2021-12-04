'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

userAvatar !== '' || DEFAULT_AVATAR;

const userVariable = document.querySelector('.js-avatar');

const img = `<img class="user__avatar" src=${userAvatar} />`;

userVariable.innerHTML = img;