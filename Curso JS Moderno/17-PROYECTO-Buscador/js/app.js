//Variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//Contenedor para la busqueda
const resultado = document.querySelector('#resultado')


const max = new Date().getFullYear()
const min = max - 10

const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
    }
//Eventlisteners

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos)
    //Llenar el year
    llenarSelect()
    
})

marca.addEventListener('change', e=>{
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})
year.addEventListener('change', e=>{
    datosBusqueda.year = parseInt(e.target.value)//hay que pasarlos a enteros xq si no te da un array vacio
    
    filtrarAuto()
})
minimo.addEventListener('change', e=>{
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
})
maximo.addEventListener('change', e=>{
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
})
puertas.addEventListener('change', e=>{
    datosBusqueda.puertas = parseInt(e.target.value)
    
    filtrarAuto()
})
transmision.addEventListener('change', e=>{
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
})
color.addEventListener('change', e=>{
    datosBusqueda.color = e.target.value
    filtrarAuto()
    
})



//Funciones
function mostrarAutos(autoFiltrado){

    limpiarHTML()

    autoFiltrado.forEach(auto => {
        const  {marca, modelo, year, precio, puertas, color, transmision}= auto
        const vehiculo = document.createElement('p')
        vehiculo.innerHTML=`${marca} ${modelo} ${year} - Color: ${color} - Puertas:${puertas} - Transmisión: ${transmision} - Precio: ${precio}`
        vehiculo.style.textAlign = 'left'
        resultado.appendChild(vehiculo)
    });
}

function llenarSelect(){
        for(let i=max; i >= min ; i--){
            
        const years = document.createElement('option')
        years.value = i
        years.innerText = i        
        year.appendChild(years)
        
        }
    }
//Funcion que filtra en base a la busqueda

    function filtrarAuto(){
        const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtroMinimo ).filter( filtroMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor )
        console.log(resultado)
        mostrarAutos(resultado)

    }

    function filtrarMarca(auto){
        if(datosBusqueda.marca){
            return auto.marca === datosBusqueda.marca // retorna los valores del array que le pasamos que son iguales a los datos de busqueda ingresado
        }
        return auto
    }
    
        function filtrarYear(auto){
            // console.log(typeof datosBusqueda.year) //String
            // console.log(typeof auto.year) //numero
            if(datosBusqueda.year){
            return auto.year === datosBusqueda.year 
        }
        return auto
    }

    function filtroMinimo(auto){
        const {minimo} = datosBusqueda   // Se puede generar destructuring para hacer el codigo mas limpio
        if(minimo){ 
            return auto.precio >= minimo
        }
        return auto.precio
    }

    function filtroMaximo(euto){
        const {maximo} = datosBusqueda
        if(maximo){
            return euto.precio <= maximo
        }
        return euto.precio
    }

    function filtrarPuertas(auto){
        if(datosBusqueda.puertas){
            return auto.puertas === datosBusqueda.puertas
        }
        return auto.puertas
    }
    function filtrarTransmision(autos){
        if(datosBusqueda.transmision){
            return autos.transmision === datosBusqueda.transmision
        }
        return autos.transmision
    }
    function filtrarColor(autos){
        if (datosBusqueda.color){
            return autos.color === datosBusqueda.color
        }
        return autos.color
    }







function limpiarHTML(){
    while( resultado.firstElementChild){
        resultado.removeChild(resultado.firstElementChild)
    }
}