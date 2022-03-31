//Singleton

//No te v a apermitir crear multiples instancias del mismo objeto
let instancia = null

class Persona {
    constructor (nombre, email){
        if(!instancia){ //Si instancia esta vacia/null
            this.nombre = nombre;
            this.email = email;
            instancia = this;//Le pasa estos valores a null
        }else{
            return instancia;//En caso de no estar vacia retorna el valor ya agregado
        }
    }
}

const persona = new Persona('emma','correo@correo.com');
console.log(persona)
//Si observamos el siguiente codigo nos damos cuenta que nos retorna el mismo objeto.
const persona2 = new Persona('emma','correo@correo.com');
console.log(persona2) 