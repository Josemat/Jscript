import * as UI from "./interfaz.js"


class API {
    constructor(artista, cancion){
        this.artista = artista
        this.cancion = cancion
    }
    busqueda(){
       
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        fetch(url)
            .then(respuesta =>respuesta.json())
            .then(resultado=>{
                if(resultado.lyrics){
                    UI.divResultado.textContent = resultado.lyrics
                    UI.headingResultado.textContent = `${this.artista} - ${this.cancion}`
                }else{
                    UI.divMensajes.textContent = "No hubo resultados o la cancion no existe, prueba con otra"
                    UI.divMensajes.className = "error"
                    setTimeout(() => {
                        UI.divMensajes.textContent = ""
                        UI.divMensajes.className = ""
                    }, 3000);
                }
            })
    }
    limpiarHTML(){
        if(UI.divMensajes){
            UI.headingResultado.remove()
            UI.divResultado.remove()
        }
    }
}
export default API;


        