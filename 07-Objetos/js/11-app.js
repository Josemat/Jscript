/*const producto = {
    nombre: "Monitor 20 Pulgadas", 
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)//THIS, se refiere a que actua en el mismo objeto
    }
}
producto.mostrarInfo();
*/
const producto = {
    nombre:"Monitor",
    disponibilidad:true,
    precio:300,
    resultado:function(){
        console.log(`El precio del producto:${this.nombre} es de ${this.precio}`) //el this. hace referencia al alcance del scope. Es decir, busca UNICAMENTE en el objeto.
    }
}
producto.resultado();