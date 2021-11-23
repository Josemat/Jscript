function Cliente (nombre, saldo){
    
    this.nombre= nombre
    this.saldo= saldo
}
const juan = new Cliente('juan', 150)

console.log(juan)

function formatearCliente(cliente){
    const {nombre, saldo} = cliente
    return `El cliente ${nombre} posee un saldo de ${saldo}`
}
console.log(formatearCliente(juan))
//Sin embargo si queremos hacer algo similar para una empresa deberia ser de la siguiente manera:



function empresa(nombre,saldo, categoria){
    this.nombre=nombre
    this.saldo=saldo
    this.categoria=categoria
}
const atos = new empresa('worldline', 9000, 'chamuyo online')

function formatEmpresa(asd){
    const {nombre, saldo, categoria} = asd
    return `la empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`
}

console.log(formatEmpresa(atos))