/*const producto = {
    nombre: "Monitor 20 Pulgadas", //DATO IMPORTANTE, se separa con comas
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        Fabricacion:{
            Pais: 'china'
        }
                
    }
}

const { nombre } = producto; // Va a CREAR una variable y asignarle el nopmbre del valor "Monitor 20 pulgadas"
const { informacion: { Fabricacion} } = producto;
const { informacion: { Fabricacion: {Pais}} } = producto;



console.log(nombre);
console.log(Fabricacion);
console.log( Pais );
*/


var producto ={
    nombre:"Monitor",  
    disponibilidad:"true",
    precio:300,
    informacion:{
        color:"blanco",
        peso:"1kg"
    },
    fabricacion:{
        pais:"China"
    }
    }

    //si quiero acceder y crear variable con DESTRUCTURING se hace de la siguiente manera:

    var {nombre, informacion} = producto;          //En ésta línea crea variables de nombre e informacion 
    var {nombre, informacion:{peso}} =producto;    //La variable información desaparece como tal sin embargo se crea la variable "peso"

    console.log(nombre);
    console.log(informacion);
    console.log(peso);