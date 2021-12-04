"use strict"


/* 1- Prueba mostrar formulario nuevo bookmark */
const section = document.querySelector(".js-data-actions");
section.classList.remove("hidden");

/* 2- Prueba mostrar menu */
const sectionMenu = document.querySelector(".js-menudropdown");
sectionMenu.classList.remove("collapsed");

/* 3- Añadir información de los enlaces desde JS
    3.1 Traer el elemento html
    3.2 Variable que contenga toda la información del li por cada uno de los enlaces
    3.3 Añadir esa info con el innerHTML por cada uno de los enlaces
*/
const listLinks = document.querySelector(".js_datalist");

const url1 = `href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion" target="_blank" rel="noopener noreferrer">
books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion`;

const input1 = `<input type="checkbox" checked name="item_imp_2" id="item_imp_2">`;

const description1 = "JS en los materiales de Adalab";

const etiqueta1 = `<li class="item__tag">javascript</li><li class="item__tag">HTML</li>`;

const url2 = `href="https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/" target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/`;

const input2 = "checkbox";

const description2 = "Ideas de proyectos JS";

const etiqueta2 = `<li class="item__tag">javascript</li><li class="item__tag">portfolio</li>`;

const url3 = `href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web"
target="_blank"
rel="noopener noreferrer"
>books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web`;

const input3 = "checkbox";

const description3 = "HTML en los materiales de Adalab";

const etiqueta3 = `<li class="item__tag">HTML</li>
<li class="item__tag">CSS</li>`;

const link1 = `<li class="data__listitem"> 
<article class="data__item">
  <p class="item__url">
    <a ${url1}>
    </a>
  </p>
  <p class="item__seen">
    ${input1}
  </p>
  <p class="item__desc">${description1}</p>
  <ul class="item__tags">
    ${etiqueta1.toLowerCase()}
  </ul>
</article>
</li>`;

const link2 = `<li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a ${url2}>
    </a></p>
  <p class="item__seen">
    <input type="${input2}" checked name="item_imp_1" id="item_imp_1">
  </p>
  <p class="item__desc">${description2}</p>
  <ul class="item__tags">
    ${etiqueta2.toLowerCase()}
  </ul>
</article>
</li>`;

const link3 = `<li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a
      ${url3}
    </a
    >
  </p>
  <p class="item__seen">
    <input type=${input3} name="item_imp_2" id="item_imp_2" />
  </p>
  <p class="item__desc">${description3}</p>
  <ul class="item__tags">
    ${etiqueta3.toLowerCase()}
  </ul>
</article>
</li>`;


let html = link1 + link2 + link3;

listLinks.innerHTML = html;


/*Funciones de String*/
