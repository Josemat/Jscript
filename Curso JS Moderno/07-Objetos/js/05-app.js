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

console.log(producto);
console.log(producto.informacion.Fabricacion.Pais);