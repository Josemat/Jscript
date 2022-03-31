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

async function consultarAPI(ciudad, pais){
    const appID = '6f231086fc72a5c8601271fc9006dfa8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}&units=metric`

    spinner() // Mostramos el spinner de carga
    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        limpiarHTML()
        if(resultado.cod === "404"){
                        mostrarAlerta('Ciudad no encontrada')
                        return
                    }
        mostrarClima(resultado)

    } catch (error) {
        console.error(error)
    }
    

}
function spinner(){

    limpiarHTML()
    const divSpinner    =   document.createElement('div')
    divSpinner.classList.add('sk-fading-circle')
    divSpinner.innerHTML =  `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
        `
    resultado.appendChild(divSpinner)
}


function mostrarClima(datos){
    
    const { name, main: {temp, feels_like, temp_min, temp_max}} = datos

    const icon = datos.weather[0].icon
    const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`
    const divICON = document.createElement('div')
    divICON.className = 'object-center'
    divICON.innerHTML = `
                        <img style="display:inline" src="${urlIcon}"/>
                        `
    const actual = document.createElement('p')
    actual.innerHTML = `${~~(temp)} &#8451;`
    actual.classList.add('font-bold','text-6xl')
    const sTermica = document.createElement('p')
    sTermica.innerHTML = `Sensacion térmica: ${feels_like}`
    sTermica.classList.add('text-xl')
    const ciudad = document.createElement('p')
    ciudad.innerHTML = `Clima en ${name}`
    ciudad.className = 'font-bold text-3xl'
    const maxMin = document.createElement('p')
    maxMin.innerHTML = `Máxima/Mínima: ${temp_max}/${temp_min}`
    maxMin.classList= 'font-bold', 'text-xl'

    const div = document.createElement('div')
    div.classList.add('text-center', 'text-white')

    ciudad.appendChild(divICON)
    div.appendChild(ciudad)
    div.appendChild(actual)
    div.appendChild(sTermica)
    div.appendChild(maxMin)
    
    
    resultado.appendChild(div)
}
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
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