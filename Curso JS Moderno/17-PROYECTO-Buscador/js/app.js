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
    mostrarAutos()
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
})
maximo.addEventListener('change', e=>{
    datosBusqueda.maximo = e.target.value
})
puertas.addEventListener('change', e=>{
    datosBusqueda.puertas = e.target.value
})
transmision.addEventListener('change', e=>{
    datosBusqueda.transmision = e.target.value
})
color.addEventListener('change', e=>{
    datosBusqueda.color = e.target.value
    
})



//Funciones
function mostrarAutos(){

    limpiarHTML

    autos.forEach(auto => {
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
        const resultado = autos.filter( filtrarMarca ).filter( filtrarYear )
        console.log(resultado)

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










function limpiarHTML(){
    while( resultado.firstElementChild){
        resultado.removeChild(resultado.firstElementChild)
    }
}