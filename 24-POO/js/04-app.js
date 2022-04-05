class Cliente{


    #nombre
    constructor(nombre, saldo){
        this.#nombre= nombre;
        this.saldo=saldo;
        }
    mostrarInformacion(){
        return `El cliente ${this.#nombre} tiene un saldo de $${this.saldo}`
    }
    static Bienvenida(){
        return `Bienvenido al cajero!`
    }
    }

const Juan = new Cliente("juan", "300")
    console.log(Juan.nombre) // Puedo acceder a su nombre de esta forma antes de hacerlo privado.luego marca undefined y solo puedo acceder a traves de metodos o constructores dentro de la clase
    console.log(Juan.mostrarInformacion())
