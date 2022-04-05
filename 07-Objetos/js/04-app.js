/*const producto = {
    nombre: "Monitor 20 Pulgadas", //DATO IMPORTANTE, se separa con comas
    precio: 300,
    disponible: true//no es necesario cerrar con la coma

}

// Crear variables para acceder a los valores del objeto
// forma mas "logica o clasica"

 
const nombre = producto.nombre;
const precio = producto.precio;

console.log(nombre);
console.log(precio);



//Destructuring

const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);*/



var producto ={
    nombre:"Monitor",  
    disponibilidad:"true",
    precio:300,
    color:"blanco"
    }

    console.log(producto);
//metodo clasico de asignar una propiedad a una variable

// var nombre = producto.nombre;

// console.log(nombre);

//Destructuring Objects

var {nombre} = producto; // lo que está dentro de la llave es extraido del objeto y creado como variable
var {disponibilidad, precio} = producto; // Se pueden extraer multiples propiedades


console.log(nombre)
console.log(disponibilidad)
console.log(precio)
