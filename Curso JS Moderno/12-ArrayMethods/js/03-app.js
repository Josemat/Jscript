const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//La sumatoria de los valores seria algo similar a:

let suma = 0;
carrito.forEach((producto)=>{return suma += producto.precio})
console.log(suma)
let reduce = carrito.reduce((valorPrevio, valorAsumar)=>valorPrevio + valorAsumar.precio, 0) //El cero es el valor con el cual inicia.
console.log(reduce)