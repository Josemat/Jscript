const producto = {
    nombre: "Monitor 20 Pulgadas", 
    precio: 300,
    disponible: true
}
const medidas = {
    peso: '1kg',
    medida: '1m'
}
console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator

const resultado2 = { ...producto, ...medidas }; // los 3 puntos significa "copiar"






console.log(resultado);
console.log(resultado2);