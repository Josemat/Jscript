const listaCarrito = document.querySelector('#lista-carrito tbody')
const listaCursos = document.querySelector('#lista-cursos')
listaCursos.addEventListener('click',seleccion)

function seleccion(e){
    e.preventDefault()
   if(e.target.classList.contains('agregar-carrito')){
       const tarjetaElegida = e.target.parentElement.parentElement
    otraSeleccion(tarjetaElegida)}
}
function otraSeleccion(tar){
    const datosTarjeta={
        foto: tar.querySelector('img').src,
        texto: tar.querySelector('h4').textContent,
        precio: tar.querySelector('span').textContent,
        cantidad:1,
        id: tar.querySelector('a').getAttribute('data-id'),
    }

    //Agergar elementos al carrito

    articulos = [...articulos, datosTarjeta]    
    console.log(articulos)
}
let articulos = [];
