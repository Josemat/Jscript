class Cliente{

    constructor(nombre, saldo){
        this.nombre= nombre;
        this.saldo=saldo;
        }
    mostrarInformacion(){
        return `El cliente ${this.nombre} tiene un saldo de $${this.saldo}`
    }
    static Bienvenida(){
        return `Bienvenido al cajero!`
    }
    }



class Empresa extends Cliente{
    constructor(nombre, saldo, rubro){
    super(nombre, saldo)
        this.rubro = rubro
        }
        static Bienvenida(){ //De esta forma se REESCRIBE un metodo
            return `Bienvenido al cajero de la empresa!`
        }
    
}

const Juan = new Cliente("Juan", 3000)

console.log(Cliente.Bienvenida())
console.log(Juan.mostrarInformacion())

const luisitoComunica = new Empresa("Luisi", 5000, "tecnologia")

console.log(luisitoComunica.mostrarInformacion())
console.log(Empresa.Bienvenida())