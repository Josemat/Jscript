// CREAR OBJETOS

//Object Literal
//Es la menos dinamica para crear objetos

const cliente = {
    nombre:"pepe",
    saldo:300
}

console.log(cliente)
console.log(typeof cliente)

//Object constructor
function Cliente(nombre, saldo){
    this.nombre = nombre
    this.saldo = saldo
}

const juan = new Cliente('Juan', 500)
const Alex = new Cliente('Alex', 1500)
console.log( juan)
console.log( Alex)