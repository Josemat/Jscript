const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('#footer')

btnFlotante.addEventListener('click', abrir)
/*
()=>{
    if (footer.classList.contains('activo') || btnFlotante.classList.contains('activo')){
    footer.classList.remove('activo')
    btnFlotante.classList.remove('activo')
    btnFlotante.textContent= 'Idioma y Moneda'
    }else{footer.classList.add('activo')
    btnFlotante.classList.add('activo')
    btnFlotante.textContent= 'X Cerrar'}
})*/


//Se puede Generar el mismo codigo y funcionamiento creando una funcion en lugar de una arrow function. Se puede referir al btn con un this
function abrir(){
    if (footer.classList.contains('activo') || btnFlotante.classList.contains('activo')){
    footer.classList.remove('activo')
    this.classList.remove('activo')
    this.textContent= 'Idioma y Moneda'
    }else{footer.classList.add('activo')
    this.classList.add('activo')
    this.textContent= 'X Cerrar'}
}