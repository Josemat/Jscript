//para crear una funcion para obtener un nombre:
const obtenerNombre = info =>({
    mostrarNombre(){
        console.log(`Mostrar nombre: ${info.nombre}`)
    }
})
const GuardarEmail = info =>({
    agregarEmail(email){
        console.log(`Agregando Email en :${info.nombre}`),
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Correo: ${info.email}`)
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
        obtenerNombre(info),
        GuardarEmail(info),
        obtenerEmail(info)
    )

}

function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info)
    )

}

const cliente = Cliente('Juan',null,'Código con juan')
cliente.mostrarNombre();
cliente.agregarEmail('correo.asd');
cliente.mostrarEmail()
const empleado = Empleado('Pedro','correo@empresa.com','Programador')
empleado.mostrarNombre();


