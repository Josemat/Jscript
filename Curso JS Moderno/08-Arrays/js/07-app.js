const carrito =[];
const producto={
    nombre:"Monitor 20 pulgadas",
    precio:200
}
const producto2={
    nombre:"tablet 10",
    precio:1000
}
const producto3 = {
    nombre:"celular",
    precio:1500
}

const producto4 = {
    nombre:"teclado",
    precio:150
}
const producto5 = {
    nombre:"parlantes",
    precio:153
}
carrito.push(producto);
carrito.push(producto3);
carrito.push(producto4);
carrito.push(producto5);
carrito.unshift(producto2);
console.table(carrito)
//--------------------------Eliminar el ultimo valor del array con .pop()
carrito.pop();
console.table(carrito)

//--------------------------Eliminar el primer valor del array con .shift()
carrito.shift();
console.table(carrito)

//--------------------------Eliminar el valor que se le asigne en el siguiente metodo
carrito.splice(1,1) //el primer 1 es el indice, el segundo es la cantidad de valores a borrar
console.table(carrito)