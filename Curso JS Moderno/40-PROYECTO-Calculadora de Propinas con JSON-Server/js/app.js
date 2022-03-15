let cliente = {
    mesa:'',
    hora:'',
    pedido:[]
};

const btnGuardarCliente = document.querySelector('#guardar-cliente')
btnGuardarCliente.addEventListener('click', guardarCliente)

function guardarCliente(){
    const mesa = document.querySelector('#mesa').value
    const hora = document.querySelector('#hora').value
    /*
    if(!mesa || !hora){
        console.log('Hay al menos un campo vacio')
    }else{
        console.log('Todos los campos estan llenos')
    }
    */
//    Otra forma de validar los datos es:

    const camposVacios = [mesa, hora].some(element => element === '')
    if(camposVacios){
        const existeAlerta = document.querySelector('.invalid-feedback')
        if(!existeAlerta){
            const alerta = document.createElement('div')
            alerta.classList.add('invalid-feedback','d-block','text-center')
            alerta.textContent = 'Todos los campos son obligatorios'
    
            document.querySelector('.modal-body form').appendChild(alerta)
            setTimeout(() => {
                alerta.remove()
            }, 2000);
        }
        return

    }
    // Asignar datos del formulario a cliente
    cliente = {...cliente, mesa, hora} //Va en éste orden para que primero haga una copia del objeto y luego le agregue los valores de mesa y hora. Si primero le agregamos los valores de mesa y hora y luego la copia se pierden los valores asignados al comienzo ya que luego copia con un objeto vacio.
    console.log(cliente)

    
//  Ocultar modal bootstrap
    const modalFormulario   =   document.querySelector('#formulario')
    const modalBootstrap    =   bootstrap.Modal.getInstance(modalFormulario)
    modalBootstrap.hide()
    
    mostrarSecciones()
    obtenerPlatillos(

    )
}

function obtenerPlatillos(){
    const url = "http://localhost:4000/platillos"
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado=>imprimirPlatillos(resultado))
        .catch(error=>console.error(error))
}
function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none')  //Seleccionamos las 2 secciones ocultas con d-none
    seccionesOcultas.forEach(element=>element.classList.remove('d-none'))
}
function imprimirPlatillos(platillos){
    
    const contenido = document.querySelector('#platillos .contenido')
    platillos.forEach(platillo=>{
        const {id, nombre, precio, categoria} = platillo
        const row = document.createElement('div')
        row.classList.add('row','py-3','border-top');

        const nomb = document.createElement('div')
        nomb.classList.add('col-md-4')
        nomb.textContent = nombre

        const divPrecio = document.createElement('div')
        divPrecio.classList.add('col-md-3','fw-bold')
        divPrecio.textContent = `$${precio}`

        const divCategoria = document.createElement('div')
        divCategoria.classList.add('col-md-3')
        divCategoria.textContent = `${categoria}`

        
        row.appendChild(nomb)
        row.appendChild(divPrecio)
        row.appendChild(divCategoria)
        contenido.appendChild(row )
    }) 
}