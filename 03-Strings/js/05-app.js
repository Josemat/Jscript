const producto = 'Monitor 20 pulgadas';

// Reemplazar cadenas de texto con .replace

console.log(producto);
console.log(producto.replace(' pulgadas', '"'));
console.log(producto.replace('Monitor ', 'Monitor curvo '));


// .Slice para recortar 

console.log(producto.slice(0,9)); // (desde, hasta) conserva
console.log(producto.slice(9)); // descarta todo hasta el num 
console.log(producto.slice(2, 1)); // Genera "error", no se puede "ir hacia atrás" asi que genera un resultado en blanco 


// Alternativa de slice que TE DEJA HACER ALGO si pones uno mayor y otro menor...

console.log(producto.substring(0,9)); // el resultado es el mismo el de .slice
console.log(producto.substring(2,0)); // en comparacion con .slice te deja


const usuario = "Juan";
console.log(usuario.substring(0,1)); // Para generar una inicial del nombre de usuario por ejemplo
console.log(usuario.charAt(0)); // Alternativa mas rapida


