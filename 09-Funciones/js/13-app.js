//Reemplazando las funciones por arrow function

const reproductor = {
    reproducir: (id)=>{console.log(`Reproduciendo cancion desde el id ${id}`)}, //La clasica funcion reemplazada por un arrow
    Pausar: id=>console.log(`Pausando el id ${id}`),//No hace falta el parentesis ni los corchetes
    Borrar: function(id){
        console.log(`Borrando el tema con id ${id}`)
        },
    cancion:'',
        //usando el set y el get
    set nuevaCancion(nombreCancion){
        this.cancion = nombreCancion;
        console.log(`Añadiendo ${nombreCancion}`)
    }
}
reproductor.reproducir(10);
reproductor.Pausar(30);
reproductor.Borrar(5)