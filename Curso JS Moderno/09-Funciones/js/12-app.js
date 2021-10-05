const carrito = [
    {nombre: "Tablet", precio:2000},
    {nombre: "Celular", precio:20000},
    {nombre: "Televisor", precio:2000},
    {nombre: "teclado", precio:250},
    {nombre: "mouse", precio:200}
]

const compra = carrito.forEach(function(nombre){
    console.log(`${nombre.nombre}`)
})

const compra2 = carrito.forEach(presio=>`El precio es ${presio.precio}`);
console.log(compra2)