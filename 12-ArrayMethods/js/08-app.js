const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//spread operator en array de indices
const meses2 = ['Diciembre', ...meses]// El orden importa, si se le agrega string no hay que anteponer los puntos suspensivos ya que te genera un valor por cada letra

console.log(meses2)

//Spread operator en array con objetos

const producto = {nombre: 'Disco', precio: 500}

const carrito2 = [...carrito, producto]
console.log(carrito2)