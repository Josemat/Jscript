const producto = {
    nombre: "Monitor 20 Pulgadas", //DATO IMPORTANTE, se separa con comas
    precio: 300,
    disponible: true//no es necesario cerrar con la coma

}

// Crear variables para acceder a los valores del objeto
// forma mas "logica o clasica"

/* 
const nombre = producto.nombre;
const precio = producto.precio;

console.log(nombre);
console.log(precio);
*/


//Destructuring

const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);