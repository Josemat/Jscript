/*const producto = {
    nombre: "Monitor 20 Pulgadas", 
    precio: 300,
    disponible: true}
const medidas = {
    peso: '1kg',
    medida: '1m'}
console.log(producto);
console.log(medidas);
const resultado = Object.assign(producto, medidas);
// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas }; // los 3 puntos significa "copiar"
console.log(resultado);
console.log(resultado2);*/

const producto = {
    nombre:"Monitor 20 pulgadas",
    disponibilidad:true,
    precio:300
}
const medidas ={
    peso:"1kg",
    altura:20,
}
console.log(producto)
console.log(medidas)
resultado = Object.assign(producto, medidas);
console.log(resultado)
 //Spread operator (...) si, los 3 puntos es una especie de "copiar"
 const resultado2 = {...producto, ...medidas} // se declara la variable y se la define como obj({}), luego se procede a usar ...
 console.log(resultado2)