// Campos formulario
const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')


//UI
const formulario = document.querySelector('#nueva-cita') //Formulario
const listaCitas = document.querySelector('#citas') //Listado derecho de citas

class Citas{
    constructor(){
        this.citas = [];
    }
    agregarCita(cita){

        console.log(cita)
    }

}

class UI{

    imprimirAlerta(mensaje, tipo){
        // Crear el HTML
        const div = document.createElement('div');
        div.classList.add('text-center', 'alert', 'd-block', 'col-12');
        

        if(tipo === 'error'){
            div.classList.remove('alert-succes', 'warning')
            div.classList.add('alert-danger')
            // console.log(div)
        }else{
        div.classList.add('alert-success')
        }
        div.textContent = mensaje
        document.querySelector('#contenido').insertBefore(div, document.querySelector('.agregar-cita'))
        setTimeout(() => {
            div.remove()
        }, 2000);
    }
    

}

const ui = new UI();
const administrarCitas = new Citas();

eventListeners()
function eventListeners(e){
    mascotaInput.addEventListener('change', datoscita)
    propietarioInput.addEventListener('change', datoscita)
    telefonoInput.addEventListener('change', datoscita)
    fechaInput.addEventListener('change', datoscita)
    horaInput.addEventListener('change', datoscita)
    sintomasInput.addEventListener('change', datoscita)

    formulario.addEventListener('submit', nuevaCita)
}


// Objeto con datos de citas
const citaObj = {
    mascota:'',
    propietario:'',
    telefono:'',
    fecha:'',
    hora:'',
    sintomas:''
}

// Cargar datos al objeto
function datoscita(e){
    citaObj[e.target.name] = e.target.value
    }
    


function nuevaCita(e){
    e.preventDefault()
    // Destructuring
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;
    // Validamos    
    if(mascota ===''||propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')
        return
    }
// Agregar id
    citaObj.id = Date.now()
    
    administrarCitas.agregarCita({...citaObj})

}