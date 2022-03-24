//para crear una funcion para obtener un nombre:
const obtenerNombre = info =>({
    mostrarNombre(){
        console.log(`Mostrar nombre: ${info.nombre}`)
    }
})





function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }
    return Object.assign(
        info,
        obtenerNombre(info)
    )

}

function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }

}

const cliente = Cliente('Juan','correo@correo.com','Código con juan')
cliente.mostrarNombre();
const empleado = Empleado('Pedro','correo@empresa.com','Programador')