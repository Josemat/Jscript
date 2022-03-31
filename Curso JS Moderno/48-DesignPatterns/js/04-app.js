//Factory

class InputHTML{
    constructor(type, nombre){
        this.type = type;
        this.nombre = nombre;
    }
    crearInput(){
        return `<input type="${this.type}" name ="${this.nombre}" id="${this.nombre}">`;
    }


}
class HTMLfactory {
    crearElemento (tipo, nombre){
        switch(tipo){
            case 'text':
            return new InputHTML ('text', nombre);
            case 'tel':
                return new InputHTML('tel',nombre)

            default:
                return;
        }
        
    }
}
const elemento = new HTMLfactory();
const inputText = elemento.crearElemento('text','nombre-cliente');
console.log(inputText.crearInput())

const elemento2 = new HTMLfactory();
const inputText2 = elemento2.crearElemento('tel','telefono-cliente');
console.log(inputText2.crearInput())