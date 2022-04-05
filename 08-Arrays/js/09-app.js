const carrito = [
    {nombre: "monitor", precio:500},
    {nombre: "gabinete", precio:100},
    {nombre: "teclado", precio:50},
    {nombre: "mouse", precio:70},
    {nombre: "tablet", precio:5000},
    {nombre: "celular", precio:50000},
]
for (let i=0;i< carrito.length ;i++){
    console.log(`${carrito[i].nombre} precio: ${carrito[i].precio}`);
}
carrito.forEach(function(productos){
    console.log(`El producto ${productos.nombre} tiene un valor de: $${productos.precio}`);
})