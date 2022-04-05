const formulario = document.querySelector('#formulario');
const tweets = document.querySelector('#lista-tweets');
const contenido = document.querySelector('#contenido');
const borrar = document.querySelector('.borrar-tweet')
let listaTweets = [];


//EventListeners
cargarEventListeners()
function cargarEventListeners(){
    formulario.addEventListener('submit', agergarTweet)
    document.addEventListener('DOMContentLoaded', ()=>{
        listaTweets = JSON.parse(localStorage.getItem('tweets')) || [] // Se le pone un OR y un array vacio, ya que si no entrega error porque cuando esta vacio entrega un primer valor null al leer del localStorage vacio y al parsearlo el valor es listaTweets = null, las demas funciones que le siguen, por ejemplo la de la linea 37 que es un spread operator(array) con un valor null modifica el mismo, generando error
        // console.log(listaTweets)
        // console.log(typeof listaTweets)
        crearHTML()
    })
    tweets.addEventListener('click', eliminarTw)

}
function eliminarTw(e){
    const id = parseInt(e.target.id)
    
    listaTweets = listaTweets.filter(tweet=> tweet.id !== id)
    
    crearHTML()
}



//Funciones
function agergarTweet(e){
        e.preventDefault()
        const tweet = document.querySelector('#tweet').value
    if (!tweet){
        mensajeError('El tweet no puede estar vacio')
        return;
    }
    const tweetOBJ={
        id: Date.now(),
        tweet //Cuando los valores a representar son el mismo se puede "dejar asi"
        //tweet : tweet, //El de arriba es el equivalente al siguiente

    }
    //Vamos iterando y agregando valores al array
    listaTweets = [...listaTweets, tweetOBJ]
    
    crearHTML(listaTweets);
    //Reiniciar el formulario
    formulario.reset();
    sincronizarLocalSt()

}

function sincronizarLocalSt(){
     localStorage.setItem('tweets', JSON.stringify(listaTweets))
}



//Creamos el HTML

function crearHTML(){
    
    limpiarHTML()
    
    if(!listaTweets){
        console.log('Entra acá')
        return
    }
    
    listaTweets.forEach(element => {
            const creartweet = document.createElement('ul')
            creartweet.innerHTML = `<li>${element.tweet}<a href="#" id="${element.id}" class="borrar-tweet"> X </a> </li>`
            tweets.appendChild(creartweet)
            });
    
}






function mensajeError(mensajes){
        
    const mensaje = document.createElement('p')
    mensaje.textContent = mensajes
    mensaje.classList.add("error")
    contenido.appendChild(mensaje)
    setTimeout(()=>{ // Borrar mensaje luego de 3 segundos
        mensaje.remove()
    },3000)

}

function limpiarHTML(){
    while(tweets.firstElementChild){
        tweets.removeChild(tweets.firstElementChild)
    }}