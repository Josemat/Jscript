//TRY CATCH
/*
console.log(1+1)

hola() //Cuando en JS se encuentra un error el codigo deja de ejecutarse


console.log('chau')
*/

//En cambio con un try catch sucede lo siguiente:

console.log('1+1');

try{
    hola() //La funcion no definida genera error pero entra en el catch de error
}
catch(error){console.log(error)} //Conviene usarlo para que la aplicacion no deje de funcionar si hay un error obteniendo los datos de una api o una DB por ejemplo.

console.log('1+3');