import * as UI from "./interfaz.js"


class API {
    constructor(artista, cancion){
        this.artista = artista
        this.cancion = cancion
    }
    busqueda(){
       
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        this.spinner()

        fetch(url)
            .then(respuesta =>{
                if(respuesta.status === 404){
                    UI.divMensajes.textContent = "No hubo resultados o la cancion no existe, prueba con otra"
                    UI.divMensajes.className = "error"
                    
                }
                return respuesta.json()
            
            })
            .then(resultado=>{
                if(resultado.lyrics){
                    UI.divResultado.textContent = resultado.lyrics
                    UI.headingResultado.textContent = `${this.artista} - ${this.cancion}`
                }else{
                    this.limpiarHTML()
                    UI.divMensajes.textContent = "No hubo resultados o la cancion no existe, prueba con otra! :)"
                    UI.divMensajes.className = "error"
                    setTimeout(() => {
                        UI.divMensajes.textContent = ""
                        UI.divMensajes.className = ""
                        // window.location.reload()
                        UI.formularioBuscar.reset()
                    }, 3000);
                    
                }
            })
    }
    limpiarHTML(){
        UI.divResultado.remove()
        UI.headingResultado.remove()
    }
    spinner(){
        const div = document.createElement('div')
        div.innerHTML = 
         `
            <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
            </div>
        `
        
        UI.divResultado.appendChild(div)
        UI.divResultado.style.whiteSpace= "normal"
        UI.divResultado.style.padding= "auto"
    }
    
}
export default API;


        