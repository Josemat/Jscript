const criptomonedasSelect = document.querySelector('#criptomonedas')
const monedaSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario')
const resultado =  document.querySelector('#resultado')
const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

document.addEventListener('DOMContentLoaded',()=>{
    llenarSelect()
    // formulario.addEventListener('submit',leerDatosFormulario)
    formulario.addEventListener('submit',submitFormulario)
    criptomonedasSelect.addEventListener('change',leerValor)
    // monedaSelect.addEventListener('change',leerValor)
})

//Creando un nuevo Promise 
const  obtenerCriptomonedas = criptomonedas => new Promise(resolve =>{
    resolve(criptomonedas)
});

function leerValor(e){
    console.log(e.target)
    objBusqueda[e.target.Name] = e.target.value
    console.log(objBusqueda)
}

function submitFormulario(e){
    e.preventDefault()
    const moneda = document.querySelector('#moneda').value
    const criptoMoneda = document.querySelector('#criptomonedas').value
    if(moneda === ''|| criptoMoneda === ''){
        mensaje('Todos los campos son necesarios! intenta agregando uno')
        return
    }
}
/*
function leerDatosFormulario(e){
    e.preventDefault()
    const moneda = document.querySelector('#moneda').value
    const criptoMoneda = document.querySelector('#criptomonedas').value
    if(moneda === ''|| criptoMoneda === ''){
        mensaje('Todos los campos son necesarios! intenta agregando uno')
        return
    }
    consultarCripto(moneda, criptoMoneda)
    spinner()
}
*/
function spinner(){
    console.log('desde spinner')
    const div = document.createElement('div')
    div.innerHTML= `
        <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
        </div>
    `
    formulario.appendChild(div)
}

function consultarCripto(moneda, criptoMoneda){
    const url =`https://min-api.cryptocompare.com/data/price?fsym=${criptoMoneda}&tsyms=${moneda}`

    limpiarHTML()
    fetch(url)
        .then(respuesta =>respuesta.json())
        .then(resultado => console.log(resultado))
}
function mensaje(mensaje){
    const   div = document.createElement('p'),
            existe = document.querySelector('.error')
    
    if(!existe){
        
        div.textContent = mensaje
        div.classList.add('error')
        resultado.appendChild(div)
        setTimeout(() => {
            resultado.removeChild(div)
        }, 2000);
    }


}

function llenarSelect(){
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))       
    
}

function selectCriptomonedas(criptomonedas){    
    criptomonedas.forEach(element => {        
        const {Name, FullName} = element.CoinInfo
        const opcion = document.createElement('option')
        opcion.textContent = FullName                
        opcion.value = Name
        opcion.nodeName = Name
        criptomonedasSelect.appendChild(opcion)            
    });
}
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}