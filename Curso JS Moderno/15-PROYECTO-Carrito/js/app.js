//Variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const listaCursos = document.querySelector('#lista-cursos')

listaCursos.addEventListener('click',agregarCurso)



//Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
    console.log('Agregaste algo')
    console.log(e.target.parentElement.parentElement) //Con este averiguamos el parent completo
    }
}

//Seleccionar el padrex2
