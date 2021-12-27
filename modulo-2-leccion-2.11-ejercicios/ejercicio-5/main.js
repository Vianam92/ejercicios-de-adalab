"use strict";

const opctionElement = document.querySelector(".js-opction");
const btn = document.querySelector(".js-btn");
const body = document.querySelector(".js-body");

function changeColor() {
  if (opctionElement.value === "blanco") {
    body.classList.remove("color2");
    body.classList.add("color1");
    localStorage.setItem("color1", opctionElement.value);
  } else if (opctionElement.value === "oscuro") {
    body.classList.add("color2");
    body.classList.remove("color1");
    localStorage.setItem("color2", opctionElement.value);
  }
}

btn.addEventListener("click", changeColor);
//window.addEventListener('login', )


