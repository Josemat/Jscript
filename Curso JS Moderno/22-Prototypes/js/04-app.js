function Cliente (nombre, saldo){
    this.nombre = nombre
    this.saldo = saldo
}
Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 10000){
        tipo = "cliente pijudazo"
    }else if(this.saldo >= 5000){
        tipo = "pijudo pero no tanto"
    }
    else{
        tipo = "Pobre de mierda"
    }
    return tipo
}
Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}
Cliente.prototype.nombreSaldoCategoria = function(){
    return `El cliente ${this.nombre} tiene un saldo de ${this.saldo} y es ${this.tipoCliente()}`
}

function persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo) //Llamamos desde cliente con this.....
    this.telefono = telefono //Este es una propiedad unica de persona
}
// Si queremos copiarle las propiedades de el proto de cliente a persona, debemos hacer lo siguiente con create.object
//RECORDAR HACERLO ANTES DE INSTANCIAR
persona.prototype = Object.create(Cliente.prototype)
persona.prototype.constructor = Cliente //Renombramos el proto a cliente

//instanciarlo
const emmanuel = new persona('Emmanuel', 1000, 656543213)

console.log(emmanuel)
console.log(emmanuel.nombreSaldoCategoria())//Podemos usar funcs de Cliente

//Luego de instanciado se pueden agregar funciones al proto sin que éstos modifiquen el de Cliente
Cliente.prototype.numeroTelefono = function(){
    return `El numero de telefono del viejo paspau es ${this.telefono}`
}
console.log(emmanuel.numeroTelefono())