localStorage.setItem('nombre', 'valor')// localstorage unicamente guarda valores de tipo string, por lo que para guardar arrays y objetos hay que pasarlos por un metodo especial

const nombre = 'productos'
const producto = {
    nombre: 'Monitor',
    precio:200
}
const productoString = JSON.stringify(producto)
localStorage.setItem(nombre , productoString)
producto.disponibilidad = true
localStorage.setItem('objeto nuevo', JSON.stringify(producto)) //Forma alternativa de usar stringify