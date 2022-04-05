const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//comprobar si un valor existe en un array

meses.forEach((mes)=>{return console.log(mes)})
meses.forEach(mes=>console.log(mes))//El codigo al ser de una linea puede quedar asi
meses.forEach(mes=>{
    if(mes === "Junio"){
        console.log(`Si existe ${mes}`)
    }
})
//Otra forma con el metodo .includes (devuelve boolean)

const comprobar = meses.includes("Febrero")
console.log(comprobar)

const comprobar2 = meses.includes("Diciembre")
console.log(comprobar2)


//Para consultar datos en un array de objetos (boolean)
const existe = carrito.some(producto=>{return producto.nombre === "Tablet"})
console.log(`Existe: ${existe}`)


const existe2 = carrito.some(producto=>producto.precio === 300) // El return esta implicito)
console.log(existe2)