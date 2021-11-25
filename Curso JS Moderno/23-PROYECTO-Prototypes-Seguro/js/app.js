//Constructores
function seguro(marca, year, tipo){
    this.marca = marca
    this.year = year
    this.tipo = tipo 
 }
 function UI(){}




document.addEventListener('DOMContentLoaded', llenar)




UI.prototype.llenar()=>{
    const   max = new Date().getFullYear(),
            min = max - 10  
    const select = document.querySelector('#year')
    for(let i = max ; i >= min ; i--){
        const option = document.createElement('option')
        option.textContent = i
        option.value = i
        select.appendChild(option)
    }
}

