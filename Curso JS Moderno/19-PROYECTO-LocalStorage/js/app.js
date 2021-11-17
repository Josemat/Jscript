const formulario = document.querySelector('#formulario');
const tweets = document.querySelector('#lista-tweets');
let listaTweets = [];


//EventListeners
cargarEventListeners()
function cargarEventListeners(){
formulario.addEventListener('submit', leerTweets)
}




//Funciones
function leerTweets(e){
    e.preventDefault()
    console.log(e.target.value)
}
