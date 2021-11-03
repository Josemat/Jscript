const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const listaCursos = document.querySelector('#lista-cursos')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
let articulosCarrito = [];

//Cargar eventListeners
cargarEventListeners()
function cargarEventListeners(){
    listaCursos.addEventListener('click',agregarCurso)
    carrito.addEventListener('click', eliminarCurso)
    vaciarCarrito.addEventListener('click', ()=>{
        articulosCarrito=[]
        limpiarHTML()
    })
}
//funciones
function agregarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}
function eliminarCurso(e){
if(e.target.classList.contains('borrar-curso')){
    const borrar = e.target.getAttribute('data-id')
    articulosCarrito = articulosCarrito.filter(curso=>curso.id !== borrar)
    carritoHTML()
}
}
//vaciar Carrito

//lee el contenido del html al que le dimos click y extrae la info del curso

function leerDatosCurso(curso){
    //Crear un objeco con los valores del curso
    const infoCurso ={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        cantidad:1,
        id: curso.querySelector('a').getAttribute('data-id')
    }    

    //Revisa si un elemento ya existe en el array
    const existe = articulosCarrito.some(curso =>curso.id === infoCurso.id)
    if(existe){
        //actuailzamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if (curso.id === infoCurso.id){
                curso.cantidad++
                return curso;//retorna el objeto actualizado
            }else{
                return curso;//retorna los objetos tal cual
            }
        })
        articulosCarrito=[...cursos]

    }else{
        //Agregar elementos al array de carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
         }




    
    carritoHTML()
}

//Muestra el carrito de compras en el HTML
function carritoHTML(){
    //limpia el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso=>{
        const {imagen, titulo,precio,cantidad,id} = curso
        const row = document.createElement('tr')
        row.innerHTML=`
        <td><img src = '${imagen}' width = "100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class ="borrar-curso" data-id="${id}"> x </a></td>
        `;
        //Agrega el HTML del carrito en el Tbody
        contenedorCarrito.appendChild(row)
    })
}
//Elimina los cursos del tbody
function limpiarHTML(){
    // contenedorCarrito.innerHTML= '' //Forma lenta

    //Forma conveniente de limpiar html
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}