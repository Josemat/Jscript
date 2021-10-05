//Funciones que retornan valores

function sumar(a,b){
    return a+b; //la funcion retorna un valor
    }
//el valor necesita ser asignado a una variable, por lo tanto se le debe colocar en un const
const resultado = sumar(5,2);
// console.log(resultado)


//ejemplo mas avanzado  

let total = 0;
function agregarCarrito(precio){
    return total += precio;
}
function agregarImpuesto(){
    return total * 1.15;

}
agregarCarrito(100);
agregarCarrito(200);
agregarCarrito(200);
console.log(`El valor de los productos sería: ${total}`);
const conImpuesto = agregarImpuesto(total)
console.log(`El total con el 15% de impuesto sería de: ${conImpuesto}`)