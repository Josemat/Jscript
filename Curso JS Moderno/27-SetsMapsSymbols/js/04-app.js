// WEAKMAPS
const producto = {
    producto: 10
}
const carrito = new WeakMap()
carrito.set(producto, 'monitor')
carrito.has(producto)


console.log(carrito)