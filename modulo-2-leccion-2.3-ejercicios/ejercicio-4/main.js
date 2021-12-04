
const datoValor = document.querySelector(".js-dato");

let añosPerro;

const oneAñoPerro = 15;
const secondAñoPerro = 15+9;
const thirdAñoPerro = 5;

const suma = secondAñoPerro+thirdAñoPerro;
const multiplica = suma + thirdAñoPerro;

if (datoValor.value === 1){
  console.log(`El perro tiene ${oneAñoPerro} años humano`);
} else if (datoValor.value === 2){
  console.log (`El perro tiene ${secondAñoPerro} años humano`);
}else if (datoValor.value===3){
  console.log(`el perro tiene ${suma} años humano`);
}else if(datoValor.value>3){
  console.log(`el perro tiene ${multiplica} años humano`);
}else{
  console.log("no se la edad del perro en humano");
}
