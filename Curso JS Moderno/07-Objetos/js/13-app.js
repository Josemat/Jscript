const producto={
    nombre:"monitor 20 pulgadas",
    precio:300,
    disponibilidad:true
}


console.log(Object.keys(producto)); //retorna las propiedades del objeto (keys)
console.log(Object.values(producto)); //retorna los valores de las keys objeto (key:values)
console.log(Object.entries(producto)); //retorna las propiedades del objeto (keys) y los valores, en pares representados en un array
                                        /*(3) [Array(2), Array(2), Array(2)]
                                        0: (2) ['nombre', 'monitor 20 pulgadas']
                                        1: (2) ['precio', 300]
                                        2: (2) ['disponibilidad', true]
                                        */