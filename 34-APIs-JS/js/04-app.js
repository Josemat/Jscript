const abrirFS = document.querySelector('#abrir-pantalla-completa')
const salirFS = document.querySelector('#salir-pantalla-completa')

abrirFS.addEventListener('click', pantallaCompleta)
salirFS.addEventListener('click', salirPantalla)

function pantallaCompleta(){

    document.documentElement.requestFullscreen() 

}

function salirPantalla(){
document.exitFullscreen()

}






