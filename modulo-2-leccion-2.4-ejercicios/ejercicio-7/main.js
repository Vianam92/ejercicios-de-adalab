function getEl(sel) {
  const selector = document.querySelector(sel);
  if (!selector) {
    console.log(
      `No existe nungún elemento con clase, id o tag llamado ${selector}`
    );
  } else {
    return selector;
  }
}

const btnEl = parseInt(getEl('.js-text').innerHTML);

function result(numero) {
  if (numero % 2 === 0) {
    return "Este número es Par";
  } else {
    return "Este número es Impar";
  }
}

const prueba = result(btnEl);
