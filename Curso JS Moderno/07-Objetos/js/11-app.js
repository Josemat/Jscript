const producto = {
    nombre: "Monitor 20 Pulgadas", 
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)//THIS, se refiere a que actua en el mismo objeto
    }
}

producto.mostrarInfo();

