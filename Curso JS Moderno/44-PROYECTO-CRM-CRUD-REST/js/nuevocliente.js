import { mostrarAlerta } from "./funciones.js";
import {nuevoCliente} from "./API.js";


(function(){
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',validarDatos)

function validarDatos(e){
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const email = document.querySelector('#email').value
    const telefono = document.querySelector('#telefono').value
    const empresa = document.querySelector('#empresa').value

    const cliente = {
        nombre,
        email,
        telefono,
        empresa
    }
    if(validar(cliente)) 
        {
            //Imprimir mensaje de error
            mostrarAlerta('Todos los campos son obligatorios')
            return
        }
        nuevoCliente(cliente)
}
function validar(obj){
    return !Object.values(obj).every(element=>element !== '')//Negando ambos deja pasar un false
}

})();