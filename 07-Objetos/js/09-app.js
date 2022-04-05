/*"use strict" // Este por ejemplo no te deja agregar una variable en el aire sin declararla primero


const producto = {
    nombre: "Monitor 20 Pulgadas", 
    precio: 300,
    disponible: true
}



Object.seal( producto ); // Sella los atributos pero deja modificar los valores (true, false, etc)
// NO DEJA AGREGAR O ELIMINAR

producto.disponible = false;
// producto.imagen = 'imagen.jpeg'; //Genera ERROR 
// delete producto.precio;          //Genera ERROR


console.log(producto);*/

const producto ={
    nombre:"Monitor",  
    disponibilidad:true,
    precio:300}

    Object.seal(producto);//.seal no te permite agregar o borrar propiedades pero si modificar las existentes

    producto.disponibilidad= false; //no genera cambios
    producto.color = 'Blanco';

    console.log(producto);