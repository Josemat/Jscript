const producto = {
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

