import {actualizarClientes, obtenerClienteID} from "./API.js"
import { mostrarAlerta, validar } from "./funciones.js";
(function(){
    //inputs o values
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa')
    const idInput = document.querySelector('#id')




document.addEventListener('DOMContentLoaded',async()=>{
    const parametrosURL = new URLSearchParams(window.location.search)
    const idCliente = parseInt(parametrosURL.get('id'))
    
     const cliente = await obtenerClienteID( idCliente)
    mostrarCliente( cliente)

    //Submit al formulario
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit',validarCliente);
});
function mostrarCliente(cliente){
    const {nombre, telefono, email,empresa, id} = cliente
    nombreInput.value = nombre
    telefonoInput.value = telefono
    empresaInput.value = empresa
    emailInput.value = email
    idInput.value = id
}
function validarCliente(e){
    e.preventDefault()
    const cliente = {
        nombre: nombreInput.value,
        email:emailInput.value,
        telefono: telefonoInput.value,
        empresa: empresaInput.value,
        id: idInput.value
    }
    
     if(validar(cliente)) 
         {
            //Imprimir mensaje de error
             mostrarAlerta('Todos los campos son obligatorios')
             return
         }
         actualizarClientes(cliente)
}

})();