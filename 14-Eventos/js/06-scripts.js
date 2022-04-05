//Event Bubbling
//Pararlo con el .stopPropagation()
const carDiv = document.querySelector('.card')
const info = document.querySelector('.info')
const titulo = document.querySelector('.titulo')

carDiv.addEventListener('click', e=>{
    e.stopPropagation()
    console.log('Diste click en Card')
})

info.addEventListener('click', e=>{e.stopPropagation()
    console.log('Diste click en Info')
})

titulo.addEventListener('click', e=>{
    e.stopPropagation()
    console.log('Diste click en Titulo')
})