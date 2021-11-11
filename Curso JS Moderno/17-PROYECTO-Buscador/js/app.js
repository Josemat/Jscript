//Variables
const resultado = document.querySelector('#resultado')
const marca = document.querySelector('#marca')
const modelo = document.querySelector('#modelo')
const year = document.querySelector('#year')
const precio = document.querySelector('#precio')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const color = document.querySelector('#color')

const max = new Date().getFullYear()
const min = max - 10

const datosBusqueda = {
    marca:'',
    modelo:'',
    year:'',
    puertas:'',
    transmision:'',
    color:'',
    minimo:'',
    maximo:'',
}
//Eventlisteners

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos()
    //Llenar el year
    llenarSelect()
})

//Funciones
function mostrarAutos(){
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