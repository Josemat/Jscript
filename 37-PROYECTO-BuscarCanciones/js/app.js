import API from './api.js'
import * as UI from './interfaz.js'



UI.formularioBuscar.addEventListener('submit',buscarCancion)

function buscarCancion(e){
    e.preventDefault()
    
    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value

    if(artista === '' || cancion ===''){

        // Mostrar error

        UI.divMensajes.textContent = 'Error, todos los campos son obligatorios'
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.remove()
        }, 2000);
        return
    }
        const consultarApi = new API(artista, cancion)
        // Consultar nuestra API
        consultarApi.busqueda()
        
        
    
}
