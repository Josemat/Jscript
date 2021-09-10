/*
const producto = {
    nombre: "Monitor 20 Pulgadas", //DATO IMPORTANTE, se separa con comas
    precio: 300,
    disponible: true//no es necesario cerrar con la coma
}

// Agregar nuevas propiedades al obj

// producto.imagen = "imagen.jpeg"; // DATO: por fuera del objeto utiliza el simbolo = y no los :

Eliminar propiedades del objeto

delete producto.precio;

console.log(producto)
*/

var producto ={
    nombre:"Monitor",  
    disponibilidad:"true",
    precio:300,
    
    }
//agregar elementos al objeto
producto.color = 'Blanco';
//Eliminar elementos
delete producto.disponibilidad;


console.log(producto)