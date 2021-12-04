function precio(numero){
    let valorConIVA = numero * 0.21;
    let valorTotal = numero + valorConIVA;
    return `Precio sin IVA: ${numero}, IVA: ${valorConIVA}, Total = ${valorTotal}`;
}
console.log(precio(50));