const producto = '      Monitor 20 pulgadas                        ';

console.log(producto);
console.log(producto.length)



console.log( producto.trimStart());// eliminar del inicio
console.log( producto.trimEnd() ); //Eliminar el fin
// chained
console.log( producto.trimStart().trimEnd() );
// trimStart y trimEnd son relativamente nuevos, .trim corta para ambos lados para el comando chaineado seria simplemente trim.
console.log(producto.trim() + ' trim solo');
