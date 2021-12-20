'use strict'

const listPeras = {
    númeroMax:10,
    númMin:1,
    numAct:5,
    numIni:1,
}

listPeras.añadir = function (){
    this.numAct++;
}
listPeras.quitar = function (){
        this.numAct--;
    }

listPeras.restablecer = function (){
    if(listPeras.numAct >= listPeras.númeroMax){
        listPeras.numIni;
    }
}

console.log(listPeras.restablecer());