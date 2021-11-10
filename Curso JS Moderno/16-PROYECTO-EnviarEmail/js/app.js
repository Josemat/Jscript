//Variables
const btnEnviar = document.querySelector('#enviar')
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('#enviar-mail')
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const spinner = document.querySelector('#spinner')


eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp)
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)
    formulario.addEventListener('submit', enviarEmail)
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
    
    if(re.test(email.value) && asunto.value !== '' && mensaje.value !==''){
        btnEnviar.disabled=false
        btnEnviar.classList.remove('opacity-50', 'cursor-not-allowed')
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
function enviarEmail(e){
    e.preventDefault()
    spinner.style.display= 'flex'
    
    setTimeout(()=>{
        spinner.style.display = 'none'
        const mensajeEnviado = document.createElement('p')
        mensajeEnviado.textContent = 'Mensaje enviado correctamente'
        mensajeEnviado.classList.add('text-center','uppercase', 'bg-green-300','p-2','m-2')
        formulario.insertBefore(mensajeEnviado,spinner)
        setTimeout(()=>{
            formulario.reset()//Es un metodo que sirve para resetear un formulario
            iniciarApp()
            mensajeEnviado.remove()
            },5000)
    }, 2000)
}