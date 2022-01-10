const carrito = ['producto 1' , 'producto 2' , 'producto 3']
function iterador(elemento){

    let i = 0 
    return{
        siguiente:()=>{
            const fin = (i >= elemento.length)
            const valor = fin? undefined: elemento[i++];
            return{
                fin,
                valor
            }
        }
    }
}

const iter = iterador(carrito)
console.log(iter.siguiente())
console.log(iter.siguiente())
console.log(iter.siguiente())
console.log(iter.siguiente())

/*
const carrito = ['producto1', 'producto2', 'Producto3']

function iterar(element){
    
let i = 0;

return{ // Va a retornar una funcion
    siguiente: ()=>{
        const fin = (i >= element.length) //la variable va a retornar true o false
        
        const valor = !fin ? element[i++] : undefined ;//Si fin es false entra, caso contrario se va a undefined

        return{fin, valor}//Retornamos los valores recibidos
        }
    }
}
// Utilizar el iterador
const iter = iterar(carrito)

console.log(iter.siguiente())
console.log(iter.siguiente())
console.log(iter.siguiente())
console.log(iter.siguiente())
*/
