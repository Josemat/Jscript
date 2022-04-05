const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const resultado = carrito.filter(producto =>{
   return producto.precio > 400
});

    console.log(resultado)

// Para llevar esto a higer order function ----------------------------------

const menor400 = producto => producto.precio > 400 //Se crea una variable con una funcion de valor
const resulta2 = carrito.filter(menor400); //Se le agrega la variable anteriormente creada como argumento
console.log(resulta2)