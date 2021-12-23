//Class Declaration
class Cliente{
    constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo}
//Agregar metodos a nuestra clase
    mostrarinformacion(){
        return `El cliente ${this.nombre} tiene un saldo de: $${this.saldo}`
    }
    static Bienvenida(){ //El static es una propiedad, las mismas no requieren ser instanciadas, pueden ser llamadas asi nomas
        return `Bienvenido al cajero`
    }
}

//Instanciando la clase
const juan = new Cliente('juen', 3000);
console.log(juan)
console.log(juan.mostrarinformacion())
console.log(Cliente.Bienvenida())//Llamada fuera de la instancia de juan, directamente desde la clase Cliente






//Class Expression
const Cliente2 = class{
 constructor (nombre, descripcion){
     this.nombre = nombre
     this.descripcion = descripcion 
}
     mostrarInfo(){
         return `El tipo ${this.nombre} es un ${this.descripcion}`
     }
 
}
const pedro = new Cliente2('juan carlo', 'chupapiya');
console.log(pedro)
console.log(pedro.mostrarInfo())