//Constructor pattern

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email)
        this.empresa = empresa
    }
    mostrarNombre(){
        console.log(`El nombre del cliente es ${this.nombre}`)
    }
}
const personita = new Persona('Emmanuel','emma@emma.com')
console.log(personita)

const clientito = new Cliente('Joseph','correo@correo.com', 'worldline');
console.log(clientito)
console.log(typeof(clientito))
clientito.mostrarNombre()