const container = document.querySelector('.container')
const formulario =  document.querySelector('#formulario')
const resultado =  document.querySelector('#resultado')


window.addEventListener('load', ()=>{
    formulario.addEventListener('submit',buscarClima)
})


function buscarClima(e){
    e.preventDefault()
    
    //Validar
    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value
    if(ciudad === '' || pais === ''){
        mostrarAlerta('Todos los campos son obligatorios')
        return
    }

    //Consultar la API
    consultarAPI(ciudad, pais)
}

function consultarAPI(ciudad, pais){
    const appID = '6f231086fc72a5c8601271fc9006dfa8';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}&units=metric`
    fetch(url)
        .then(success =>success.json())
        .then(respuesta => {
            
            if(respuesta.cod === "404"){
                mostrarAlerta('Ciudad no encontrada')
                return
            }
            mostrarClima(respuesta)
        })
}


function mostrarClima(datos){
    console.log(datos)
    const { main: {temp, feels_like, temp_min, temp_max}} = datos
    console.log(~~temp)
    console.log(feels_like)
    console.log(temp_max)
    console.log(temp_min)
    
}


function mostrarAlerta(mensaje){
    const alerta = document.querySelector('.error')

    if(!alerta){
        const div = document.createElement('div')
    div.className = 'bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto mt-6 text-center error'
    div.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block"> ${mensaje}</span>
    `
    container.appendChild(div)
    setTimeout(() => {
        div.remove()
    }, 3000);

    }
    
}