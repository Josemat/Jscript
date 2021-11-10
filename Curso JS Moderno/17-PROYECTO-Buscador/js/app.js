//Variables
const resultado = document.querySelector('#resultado')

//Eventlisteners
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos()
})

//Funciones
function mostrarAutos(){
    autos.forEach(auto => {
        const  {marca, modelo, year, precio, puertas, color, transmision}= auto
        const vehiculo = document.createElement('p')
        vehiculo.innerHTML=`${marca} ${modelo} modelo: ${year} - Color: ${color} - Puertas:${puertas} - Transmisión: ${transmision} - Precio: ${precio}`
        vehiculo.style.textAlign = 'left'
        resultado.appendChild(vehiculo)
    });
}