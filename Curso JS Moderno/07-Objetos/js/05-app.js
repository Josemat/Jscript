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

console.log(producto);
console.log(producto.informacion.Fabricacion.Pais);
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

    console.log(producto);
    console.log(producto.informacion);
    console.log(producto.informacion.color);
