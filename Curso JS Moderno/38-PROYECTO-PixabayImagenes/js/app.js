const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')
const paginacionDiv = document.querySelector('#paginacion')

let resultadosPorPagina = 30;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = ()=>{
    formulario.addEventListener('submit',buscarImagen)

}

function buscarImagen(e){
    e.preventDefault()
    const termino = document.querySelector('#termino').value
    if (!termino){
        // Mostrar Mensaje error
        mostrarMensaje('El campo de busqueda no puede estar vacío')
        return
    }
        buscarImagen2()
    
}

function buscarImagen2(){

    const termino = document.querySelector('#termino').value    
    const   key = '25869098-e5cae873ecd1a395389e346ef',
    // Por si necesita pasar por regular expressions
    rE = /( )/g,
    terminoBusqueda= termino.replace(rE,'+')
    url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&per_page=${resultadosPorPagina}&page=${paginaActual}`


fetch(url)
.then(respuesta => respuesta.json())
.then(resultado =>{
    totalPaginas =  paginador(resultado.totalHits)
    busqueda(resultado.hits)
                  
})
}


// Generador que va a registrar la cantidad de elementos de acuerdo a la pagina
function *crearPaginador(total){
    for(let i = 1; i<=total;i++){
        yield i;
        
    }
}

function paginador(resultado){
    return parseInt(Math.ceil(resultado/resultadosPorPagina))
}

function mostrarMensaje( mensaje){
    const alerta = document.createElement('p'),
          existe = document.querySelector('.bg-red-100')//Seleccionamos la clase de la alerta

          if(!existe){

              alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center')
              alerta.innerHTML = `
                                      <strong class="font-bold">Error!</strong>
                                      <span class="block sm:inline">${mensaje}</span>
                                      `
              formulario.appendChild(alerta)
              setTimeout(() => {
                  formulario.removeChild(alerta)
              }, 3000);
          }

                        }

function busqueda(resultadoBusqueda){
    // Limpiamos html en caso de que haya busqueda anterior
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
    resultadoBusqueda.forEach(element => {
        const {previewURL, likes, views, largeImageURL}= element

        resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
                <img class="w-full" src="${previewURL}">

                <div class="p-4">
                    <p class="font-bold"> ${likes} <span class="font-light">Likes</span></p>
                    <p class="font-bold"> ${views} <span class="font-light">Views</span></p>

                        <a class ="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                        href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                        >
                        Ver imagen
                        </a>
                </div>
            </div>    
        </div>
        `
    });
    // Limpiar html del paginador.
    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild)
    }
    // Generamos el paginador
    imprimirPaginador()
}
function imprimirPaginador(){
     iterador = crearPaginador(totalPaginas)
     
     console.log(Boolean(iterador))
     while(true){
         const {value, done} = iterador.next();
         if(done) return;

         // Caso contrario, genera un boton por cada elemento en el generador
         const boton = document.createElement('a');
         boton.href = "#formulario";
         boton.dataset.pagina = value;
         boton.textContent = value;
         boton.classList.add('siguiente','bg-yellow-400','px-4','mr-2','font-bold','mb-4','uppercase','rounded');
         boton.onclick = ()=>{
             paginaActual = value
             buscarImagen2();
         }

           
        paginacionDiv.appendChild(boton);
     }

}