const carrito = [
    {nombre: "monitor", precio:500},
    {nombre: "gabinete", precio:100},
    {nombre: "teclado", precio:50},
    {nombre: "mouse", precio:70}
]
carrito.forEach(function(productos){
    console.log(`El producto ${productos.nombre} tiene un valor de: $${productos.precio}`);
})
carrito.map(function(productos){                                                     //Practicamente igual a forEach
    console.log(`El producto ${productos.nombre} tiene un valor de: $${productos.precio}`);
})
const nuevoArray = carrito.forEach(function(productos){ //Este sale comoo undefined
    return `Producto: ${productos.nombre} cuesta: ${productos.precio}`
})
const nuevoArray2 = carrito.map(function(productos){ //Este es el que funciona, ya que crea un nuevo array a partir de los valores retornados (return) y los asigna a la variable "nuevoArray". Cosa que el forEach no puede hacer
    return `Prod: ${productos.nombre} money:${productos.precio}`
})

console.log(nuevoArray) //undefined
console.log(nuevoArray2)//este esta ok