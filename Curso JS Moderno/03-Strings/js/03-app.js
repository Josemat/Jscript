const producto = 'Monitor 20 pulgadas ';
const precio = '30 USD';

// forma 1 de hacerlo(parece re oldschool)
/* console.log(producto.concat(precio));
console.log(producto.concat('Descuento')); */

console.log( producto + "a un precio de " + precio);

// los signos mas suelen ser engorrosos asi que utilizaremos lo siguiente
// arriba de TAB al lado de 1

console.log(`el ${producto} tiene un valor de ${precio} al dia de la fecha`);


