//Selector curso
const seleccionCurso = document.querySelector('#lista-cursos')
const carrito = document.querySelector('#lista-carrito tbody')
const borrarCurso = document.querySelector('#lista-carrito')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
let listaCursos = []


seleccionCurso.addEventListener('click', cursoSeleccionado)
borrarCurso.addEventListener('click', borrar)
vaciarCarrito.addEventListener('click', ()=>{
    listaCursos=[]
    limpiarHTML()
})

function borrar(e){
    if(e.target.classList.contains('borrar-curso')){
        const borrado = e.target.getAttribute('id')
        listaCursos = listaCursos.filter(curso=>curso.id !== borrado)
        iterado(listaCursos)
    }
}

function cursoSeleccionado(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){const curso = e.target.parentElement.parentElement
    infoCurso(curso)}
}

function infoCurso(curso){
    const descripcion={        
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('.info-card h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id:     curso.querySelector('a').getAttribute('data-id'),
        cantidad:1        
    }
    if(listaCursos.some(id=>id.id === descripcion.id)){
        //si existe creamos otra variable con los valores
        const existe = listaCursos.map(id =>{
            if(id.id === descripcion.id){
                id.cantidad++;
                return id;
            }else{
                return  id;
            }
        })
        listaCursos=[...existe]
    }else{

            listaCursos=[...listaCursos, descripcion]

    }




    iterado(listaCursos)
}
function iterado(listCursos){
    limpiarHTML();
    
    listCursos.forEach(curso => {
        const card = document.createElement('tr')
        const {imagen,titulo,precio,cantidad, id} = curso
        card.innerHTML=`
        <img src="${imagen}" width="100">
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td> <a class="borrar-curso" href="#" id="${id}" >X </a></td>
        `
    carrito.appendChild(card);
    });
}

function limpiarHTML(){
    carrito.innerHTML=""
}