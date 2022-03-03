const criptomonedasSelect = document.querySelector('#criptomonedas')

document.addEventListener('DOMContentLoaded',llenarSelect)

//Creando un nuevo Promise 
const  obtenerCriptomonedas = criptomonedas => new Promise(resolve =>{
    resolve(criptomonedas)
});

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
        criptomonedasSelect.appendChild(opcion)            
    });
}