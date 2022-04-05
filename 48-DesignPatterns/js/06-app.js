//Mixin patterns
// Es una forma de agregar funciones a una clase una vez que ha sido creada

class Persona {
    constructor (nombre, email){
        this.nombre = nombre;
        this.email = email;

    }
}

const funcionesPersona = {
    mostrarInformacion(){
        return `Nombre persona: ${this.nombre} Email: ${this.email}`
    }
}
// Añadir funcionesPersona a la clase Persona
Object.assign(Persona.prototype, funcionesPersona)

const cliente = new Persona('emma','email@emai.l.comas')
console.log(cliente.mostrarInformacion())