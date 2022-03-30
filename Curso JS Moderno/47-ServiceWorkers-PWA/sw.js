const nombreCache = 'apv-v1';
const archivos = [ //Archivos a cachear para que la app funcione sin conexion a inet
        '/', //Raiz
        '/index.html',
        '/error.html',
        '/css/bootstrap.css',
        '/css/styles.css',
        '/js/app.js',
        '/js/apv.js',
        '/manifest.json',
        '/sw.js'

];
//Cuando se instala el service worker
//Este metodo solo se ejecuta una vez
self.addEventListener('install',(e)=>{
    console.log('Instalado el Service Worker')
    
    e.waitUntil(//Sirve para cuando los archivs a cachear son muy pesados entonces le decis que espere
        caches.open(nombreCache)
            .then(cache => {
                console.log('Cacheando');
                cache.addAll(archivos)
            })
    )
})

//Activar el service worker
self.addEventListener('activate',e=>{
    console.log('Service worker activado');
    console.log(e);
})

//Evento fetch para descargar elementos estatiscos
// self.addEventListener('fetch', e =>{
//     console.log('Fetch...', e );
//     e.respondWith(
//         caches.match(e.request) //Se revisa el tipo de request
//             .then(respuestaCache =>{ //Entonces
//                 return respuestaCache}) //Si la respuesta es igual a lo que esta en el cache lo vamos a cargar de ahi
            
//             .catch( () => caches.match('/error.html'))
//             )
// })
// Fetch events para el CSS, HTML, imagenes JS, y hasta llamados a fetch..
self.addEventListener('fetch', e => {
    console.log('Fetch.. ', e);

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache
            })
            .catch( () => caches.match('/error.html'))
    );
});