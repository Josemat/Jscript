const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//Hacer una busqueda con un forEach
let imprimir = "";
carrito.forEach((producto, indice)=>{
    if(producto.nombre === "Tablet"){
        imprimir = carrito[indice];
    }
})
console.log(imprimir)


//Hacer la misma busqueda con un .find
const resultado = carrito.find(producto=>producto.nombre === 'Teclado');
console.log(resultado)