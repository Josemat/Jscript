//Variables
const btnEnviar = document.querySelector('#enviar')
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('#enviar-mail')

eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp)
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)
}

//Funciones
function iniciarApp(){
    btnEnviar.disabled=true
    btnEnviar.classList.add('opacity-50', 'cursor-not-allowed')
}

function validarFormulario(e){
    if(e.target.value === ''){
        e.target.classList.add('border','border-red-500')
        mensajeError()
    }else{
        e.target.classList.add('border','border-green-500')
        
  
    }

}
function mensajeError(){
    const errors = document.createElement('p')
    errors.textContent= 'Todos los campos son obligatorios'
    errors.classList.add('error', 'text-red-500','border','border-red-500', 'mt-5', 'p-3', 'bg-red-100', 'text-center')

    //Agrega una sola vez el error
    const hayError = document.querySelectorAll('.error')
    if(hayError.length === 0){
        formulario.appendChild(errors)
        console.log('asd')
    }
}