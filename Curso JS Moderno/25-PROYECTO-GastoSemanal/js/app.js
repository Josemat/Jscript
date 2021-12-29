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
        console.log(this.gastos)
        
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
        //Iterar sobre los gastos
        console.log(gastos)

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
    const cantidad = document.querySelector('#cantidad').value

    if(gasto === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios.', 'error')
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('El valor ingresado debe ser un número y mayor a cero', 'alert')
    }else{
        ui.imprimirAlerta('Gasto añadido exitosamente' , 'success')
    }


    // Crear objeto gasto
    const gastoObjeto = {gasto, presupuesto, id: Date.now()}
    presupuesto.guardarGasto(gastoObjeto)

    const { gastos } = presupuesto
    ui.agregarGastoListado(gastos)
    formulario.reset()
    
}
