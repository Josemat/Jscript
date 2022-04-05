/*//Object Literal

const producto = {
    nombre: "Monitor 20 Pulgadas", 
    precio: 300,
    disponible: true
}

// Object Constructor

function producto(nombre, producto){
    this.nombre = 
}
*/





//Object literal
const producto = {
    nombre:"Monitor 20 pulgadas",
    disponibilidad:true,
    precio:300,
    infoProducto: function(){
        console.log(`El precio de ${this.nombre} es de ${this.precio}`)
    }
}
producto.infoProducto();

//Object constructor:
function agregar(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
    this.disponibilidad=true
}
const producto2 = new agregar("peine", 50)
console.log(producto2)