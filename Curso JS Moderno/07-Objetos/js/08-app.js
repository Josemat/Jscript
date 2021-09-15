/*"use strict" // Este por ejemplo no te deja agregar una variable en el aire sin declararla primero


const producto = {
    nombre: "Monitor 20 Pulgadas", 
    precio: 300,
    disponible: true
}



Object.freeze( producto ); // Congela por consiguiente las dos lineas de comando de abajo van a generar error


// producto.disponible = false;
// producto.imagen = 'imagen.jpeg';
// delete producto.precio;


console.log(producto);
console.log(Object.isFrozen(producto));
*/


const producto ={
    nombre:"Monitor",  
    disponibilidad:true,
    precio:300}

    Object.freeze(producto);//De este modo se congela el Obj

    producto.disponibilidad= false; //no genera cambios
    console.log(Object.isFrozen(producto));// de ésta forma se sabe si está congelado el obj
    producto.color = 'Blanco';

    console.log(producto);
