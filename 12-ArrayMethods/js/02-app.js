const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//Encontrar indice de un valor

meses.forEach((mes,indice)=>{
    if(mes === 'Abril'){
        console.log(`Abril se encuentra en el índice ${indice}`)
    }
})

const index = meses.findIndex((mes)=>{return mes==='Febrero'})
const index2 = meses.findIndex(mes=>mes==='Febrero')
console.log(index)
console.log(index2)

carrito.forEach((producto,indic)=>{
    if(producto.nombre === "Tablet"){
        console.log(`Si se encontro en el indice ${indic}`)
    }
})

const raro = carrito.findIndex((producto)=>{return producto.nombre === 'Teclado' })
console.log(raro);
const raro1 = carrito.findIndex(producto=>producto.precio === 300) //Sin parentesis, llave ni return
console.log(raro1);
