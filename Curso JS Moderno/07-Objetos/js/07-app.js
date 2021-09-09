//Una variable creada con const no se puede modificar,EXCEPTO los valores de los attrib
const producto = {
    nombre: "Monitor 20 Pulgadas", 
    precio: 300,
    disponible: true
} 

producto.disponible = false;    //Por Ejemplo Aquí se le puede modificar el boolean
delete producto.precio;         //Hasta inclusive borrar un atributo
producto.nuevoAtributo = 'blanco';//Agregar


console.log(producto);
