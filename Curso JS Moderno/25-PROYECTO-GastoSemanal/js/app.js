//Variables y Selectores

const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos
eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarpresupuesto)
}
formulario.addEventListener('submit',agregarGasto)
 

//Clases
class Presupuesto{
    constructor (presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos= []
    }
    guardarGasto(gastoNuevo){

        this.gastos = [...this.gastos, gastoNuevo]
        this.calcularRestante()
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto )=>total + gasto.cantidad, 0)
        this.restante = this.presupuesto - gastado
        
    }
    eliminarGasto(id){
       this.gastos = this.gastos.filter(array => array.id !== id)
       ui.agregarGastoListado(this.gastos)
       this.calcularRestante()
       
    }

}

class UI{
    //crear un nuevo metodo que 
    insertarPresupuesto(objeto){
        const {presupuesto, restante} = objeto;
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante

    }
    imprimirAlerta(mensaje, tipo){
        const div = document.createElement('div')
        div.classList.add('text-center', 'alert')

        

        if(tipo === 'error'){
            div.classList.add('alert-danger')
            
            
        }else if(tipo === 'alert'){
            div.classList.add('alert-danger')
            
            
        }
            div.classList.add('alert-success')
            
        div.textContent = mensaje
        document.querySelector('.primario').insertBefore(div, formulario)
        setTimeout(()=>{
            div.remove()
            },2000)
        
    }
    agregarGastoListado(gastos){

        this.limpiarHTML()

        //Iterar sobre los gastos
        gastos.forEach(element => {
            const {id, gasto, cantidad} = element

        // Crear Li
        const crearLista = document.createElement('li')
        crearLista.className = 'list-group-item d-flex justify-content-between align-items-center';
        crearLista.dataset.id =id
        // Crear HTML del gasto
        crearLista.innerHTML = `${gasto} <span class="badge badge-primary badge-pill">$ ${cantidad} </span> `

        //Crear Boton
        const btn = document.createElement('button')
        btn.classList.add('btn', 'btn-danger', 'borrar-gasto')
        btn.textContent="Borrar"
        btn.onclick= ()=>{
            eliminarGasto(id)
        }

        crearLista.appendChild(btn)

        //Agregar al html
        gastoListado.appendChild(crearLista)
        
        });
        

    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild)
        }
    }
    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante
        
        //Actualizar color restante
        const total = Number(document.querySelector('#total').textContent)
        if((total/4)>=restante){
            document.querySelector('.restante').classList.remove('alert-success','alert-warning')
            document.querySelector('.restante').classList.add('alert-danger')
        }else if( (total/2)>=restante){
            document.querySelector('.restante').classList.remove('alert-success', 'alert-danger')
            document.querySelector('.restante').classList.add('alert-warning')
        }else{
            document.querySelector('.restante').classList.remove('alert-warning', 'alert-danger')
            document.querySelector('.restante').classList.add('alert-success')
        }
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error')
            document.querySelector('button[type="submit"]').disabled = true
        }

    }

   

}


//Instanciar
const ui = new UI()
let presupuesto;


// Funciones
function preguntarpresupuesto(){

    const presupuestoUsuario = prompt('Ingrese presupuesto semanal', )

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario < 0){
        preguntarpresupuesto()
    }else{
        
    //Instanciamos la clase y el constructor desde aquí gracias a la variable let
    presupuesto = new Presupuesto(presupuestoUsuario)
    ui.insertarPresupuesto(presupuesto)
    }
}

function agregarGasto(e){
    e.preventDefault()
    const gasto = document.querySelector('#gasto').value
    const cantidad = Number(document.querySelector('#cantidad').value)

    if(gasto === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios.', 'error')
        return
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('El valor ingresado debe ser un número y mayor a cero', 'alert')
        return
    }else{
        ui.imprimirAlerta('Gasto añadido exitosamente' , 'success')
    }


    // Crear objeto gasto
    const gastoObjeto = {gasto, cantidad, id: Date.now()}
    presupuesto.guardarGasto(gastoObjeto)

    const { gastos, restante } = presupuesto
    
    ui.agregarGastoListado(gastos)

    ui.actualizarRestante(restante)
    formulario.reset()
    
}

function eliminarGasto(id){
    presupuesto.eliminarGasto(id)

    const { gastos, restante } = presupuesto

    ui.actualizarRestante(restante)
    ui.insertarPresupuesto(presupuesto)
    ui.agregarGastoListado(gastos)
}
