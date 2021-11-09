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

    
    if(e.target.value.length > 0){

        const errors = document.querySelector('p.error')
        if (errors)
        {errors.remove()}

        e.target.classList.remove('border','border-red-500')
        e.target.classList.add('border','border-green-500')
    }else{
        e.target.classList.remove('border','border-green-500')
        e.target.classList.add('border','border-red-500')
        mensajeError('Todos los campos son obligatorios')

        }
    if(e.target.type === 'email'){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        // console.log(re.test(e.target.value), 'probando expresion regular')
        if(re.test(e.target.value)){
            const errors = document.querySelector('.error')
            if (errors)
            {errors.remove()}
            e.target.classList.remove('border','border-red-500')
            e.target.classList.add('border','border-green-500')
        }else{
            e.target.classList.remove('border','border-green-500')
            e.target.classList.add('border','border-red-500')
            mensajeError('Email no válido')
            
        }
    }    
}
function mensajeError(mensaje){
    const errors = document.createElement('p')
    errors.textContent= mensaje
    errors.classList.add('error', 'text-red-500','border','border-red-500', 'mt-5', 'p-3', 'bg-red-100', 'text-center')

    //Agrega una sola vez el error
    const hayError = document.querySelectorAll('.error')
    if(hayError.length === 0){
        formulario.appendChild(errors)
        
    }
}