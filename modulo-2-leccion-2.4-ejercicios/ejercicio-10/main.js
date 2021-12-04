function calculator(){
    let box = "border-box";
    box = true;
    let padding= "30px";
    let borderSize = "10px";
    let widthContent = "100px";
    let widthTotal = "100px";
if(box&&padding&&borderSize){
    return `El ancho total del contenido es: ${widthContent} y el ancho total de la caja es: ${widthTotal}`;
}else{
    return "La caja no es border-box";
}
}
const variable = calculator;

console.log(calculator);