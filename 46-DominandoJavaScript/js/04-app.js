// Implicit binding

const cliente = {
    nombre: 'Emmanuel',
    edad: 20,
    obtenerIdentidad(){
        console.log(`El nombre del cliente es ${this.nombre} y su edad es: ${this.edad} años`) //El .this busca en el bloque superior al mismo
    },
    mascota: {
        nombre: 'Karen',
        edad: 9,
        obtenerInfoMascota(){
            console.log(`El nombre de la mascota es: ${this.nombre} y la edad de la misma es: ${this.edad} años`)
        }

    }
}
cliente.obtenerIdentidad()
cliente.mascota.obtenerInfoMascota()