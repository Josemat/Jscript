const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

window.onload = ()=>{
    formulario.addEventListener('submit',buscarImagen)

}

function buscarImagen(e){
    e.preventDefault()
    console.log('desde buscar imagen')
}