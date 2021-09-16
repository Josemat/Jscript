const carrito =[];
const producto={
    nombre:"Monitor 20 pulgadas",
    precio:200
}
const producto2={
    nombre:"tablet 10",
    precio:1000
}
const producto3 = {
    nombre:"celular",
    precio:1500
}
//--------------------------------------------------------------------------------------------------
//Forma Imperativa de ingresar datos
//--------------------------------------------------------------------------------------------------

carrito.push(producto); //forma Imperativa de agregar valores al array, éste lo modifica

console.table(carrito);
//--------------------------------------------------------------------------------------------------
//Forma declarativa de ingresar datos (con spread(...) operator)
//--------------------------------------------------------------------------------------------------
let resultado; // se declara variable
resultado = [...carrito, producto2];    //se copia el array con el spread operator "..." y se le agrega
                                        //el valor del objeto "producto2"
//Si se quiere cambiar el orden de ingreso del valor es suficiente con cambiar el orden del spread operator
resultado = [producto3, ...resultado]; //entonces se trae primero el valor de prod3 y luego se le agrega al array




console.table(resultado)
