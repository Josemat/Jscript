//FOR OF
const pendientes = ['Tarea','Comer','Proyecto','Estudiar']

const carrito = [
    {nombre: "monitor", precio:500},
    {nombre: "gabinete", precio:100},
    {nombre: "teclado", precio:50},
    {nombre: "mouse", precio:70}
]

for(nombre of pendientes){
    console.log(nombre)
}
for(producto of carrito){
    console.log(producto)
    console.log(producto.nombre)
}