const padre = document.querySelector(".warning, .error, .success");

if (padre.classList.contains("warning")) {
    padre.innerHTML = "Tenga cuidado";
} else if (padre.classList.contains("error")) {
  padre.innerHTML = "Ha surgido un error";
} else if (padre.classList.contains("success")) {
  padre.innerHTML = "Los datos son correctos";
}
