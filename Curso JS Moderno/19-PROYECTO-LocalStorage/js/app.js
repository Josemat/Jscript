const formulario = document.querySelector('#formulario');
const tweets = document.querySelector('#lista-tweets');
const contenido = document.querySelector('#contenido')
let listaTweets = [];


//EventListeners
cargarEventListeners()
function cargarEventListeners(){
    formulario.addEventListener('submit', agergarTweet)
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
    console.log(listaTweets)
    crearHTML(listaTweets);

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
            creartweet.innerHTML = `<li>${element.tweet}<a href="#" id="borrartw" class="borrar-tweet"> X </a> </li>`
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