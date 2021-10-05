const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion desde el id: ${id}`)
    },
    pausar: function(id){
        console.log(`Pausando ${id}...`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}

//Agregando valores al objeto:
reproductor.borrar = function(id){
    console.log(`Borrando cancion con el id ${id}`)
}
reproductor.reproducir(30)
reproductor.reproducir(10)
reproductor.pausar(10)
reproductor.borrar(30);

reproductor.crearPlaylist("m'urica")
reproductor.reproducirPlaylist("m'urica")