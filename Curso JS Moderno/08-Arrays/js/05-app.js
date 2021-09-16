const meses = ['enero','febrero','marzo','abril'];
console.table(meses);

//forma clasica de agregar valores,PERO, hace falta saber el orden y los valores del array
meses[4]='mayo';
//Forma "Automática" de agregar valores al final del array:
meses.push('Junio');
console.table(meses);
//Vamos a Hacer el ejemplo del carrito de compras:
const carrito = [];
const producto={
    nombre:"Monitor 20 pulgadas",
    precio:200
}
const producto2={
    nombre:"tablet 10",
    precio:1000
}

carrito.push(producto);
carrito.push(producto2);// los va agregando en orden de ejecucion, es decir como lo va 
                        //leyendo de arriba hacia abajo
console.table(carrito)
//ahora, si queremos agregar algo al inicio del array se utiliza el metodo "unshift"
const producto3 = {
    nombre:"celular",
    precio:1500
}
carrito.unshift(producto3)
console.table(carrito)
