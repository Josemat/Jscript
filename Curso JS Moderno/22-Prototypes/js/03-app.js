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

const pedro = new Cliente('pedro', parseInt(prompt('Ingrese cash', '100-10k')))

console.log(pedro.nombreSaldoCategoria())
pedro.retiraSaldo(1000)
console.log(pedro.nombreSaldoCategoria())
