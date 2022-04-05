//Para acceder a un valor existen 2 metodos:
var producto ={
    nombre:"Monitor",  
    tamanio:"20pulgadas",
    color: "blanco",
    disponibilidad:"true",
    precio:300,
    
    }

    console.log(producto.nombre) // con un punto luego del objeto
    console.log(producto['nombre']) // con un corchete y su valor entre comillas luego del objeto