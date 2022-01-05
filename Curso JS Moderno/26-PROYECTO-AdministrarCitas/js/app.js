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

let modoEdicion;

class Citas{
    constructor(){
        this.citas = [];
    }
    agregarCita(cita){
        this.citas = [...this.citas, cita]
    }
    eliminarCita(id){
        this.citas = this.citas.filter(e=>e.id != id)
        
    }
    editarCita(citaNueva){
        this.citas = this.citas.map(cita => cita.id === citaNueva.id ? citaNueva : cita)
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

    mostrarCitas({citas}){ //DESTRUCTURING desde el parametro

        this.limpiarHTML()

        citas.forEach(element => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = element
            const div = document.createElement('div')
            div.classList.add('cita','p-3')
            div.dataset.id = id;

            // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2')
            mascotaParrafo.classList.add('card-title','font-weight-bolder');
            mascotaParrafo.textContent = mascota 

            const propietarioParrafo = document.createElement('p')
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`
            const telefonoParrafo = document.createElement('p')
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Telefono: </span> ${telefono}`
            const fechaParrafo = document.createElement('p')
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`
            const horaParrafo = document.createElement('p')
            horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`
            const sintomasParrafo = document.createElement('p')
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Síntomas: </span> ${sintomas}`

            // Boton eliminar
            const btnEliminar = document.createElement('button')
            btnEliminar.classList.add('btn','btn-danger','mr-2')
            btnEliminar.innerHTML = `Eliminar &times`
            btnEliminar.onclick = ()=>{
                eliminarCita(id)
            }

            // Boton editar cita
            const btnEditar = document.createElement('button')
            btnEditar.className = 'btn btn-info'
            btnEditar.innerHTML = `Editar &larr;`
            btnEditar.onclick = ()=>{
                editarCita(element)
            }

            // Agregamos los elementos al div
            div.appendChild(mascotaParrafo)
            div.appendChild(propietarioParrafo)
            div.appendChild(telefonoParrafo)
            div.appendChild(fechaParrafo)
            div.appendChild(horaParrafo)
            div.appendChild(sintomasParrafo)
            div.appendChild(btnEliminar)
            div.appendChild(btnEditar)

            // Agregamos el div al HTML
            listaCitas.appendChild(div)
            
        });

        
        
        
    }
    limpiarHTML(){
            while(listaCitas.firstChild){
                listaCitas.removeChild(listaCitas.firstChild)
            }
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

    if(modoEdicion){
        ui.imprimirAlerta('Cita actualizada correctamente')
        // metodo para actualizar valores
        administrarCitas.editarCita({...citaObj})
        // actualizar boton a valor anterior
        
    formulario.querySelector('button[type="submit"]').textContent = "CREAR CITA"
    modoEdicion= false;
    }else{
    // Agregar id    
    citaObj.id = Date.now()
    // agregar el objeto  COMO UNA COPIA del mismo
    administrarCitas.agregarCita({...citaObj})
    // Agregar mensaje de agregado
    ui.imprimirAlerta('Cita creada correctamente')   
    }
    
    // Resetear form
    formulario.reset()
    // Reiniciar Objeto
    reiniciarObj()
    // Mostrar en el HTML
    ui.mostrarCitas(administrarCitas)

    }
function reiniciarObj(){
    citaObj.mascota = ''
    citaObj.propietario = ''
    citaObj.telefono = ''
    citaObj.fecha = ''
    citaObj.hora = ''
    citaObj.sintomas = ''
    }

function eliminarCita(id){
    // Eliminar el id desde la clase
    administrarCitas.eliminarCita(id)
    // mostrar mensaje
    ui.imprimirAlerta('Cita eliminada correctamente!')
    // actualizar HTML
    ui.mostrarCitas(administrarCitas)

}

function editarCita(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
    // Agregar los datos a los inputs
    mascotaInput.value = mascota
    propietarioInput.value = propietario
    telefonoInput.value = telefono
    fechaInput.value = fecha
    horaInput.value = hora
    sintomasInput.value = sintomas

    // agregar los datos al obj
    citaObj.mascota = mascota
    citaObj.propietario = propietario
    citaObj.telefono = telefono
    citaObj.fecha = fecha 
    citaObj.hora = hora
    citaObj.sintomas = sintomas
    citaObj.id = id

    formulario.querySelector('button[type="submit"]').textContent = "Guardar cambios"
    modoEdicion = true;

}