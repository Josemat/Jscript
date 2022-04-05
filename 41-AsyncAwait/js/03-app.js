function descargarClientes(){
    return new Promise ((resolve, reject)=>{
        const error = false; // ---------------------Modificar este valor------------------------
        setTimeout(() => {
            if(!error){
                resolve ('El listado de clientes se descargo correctamente!');

            }else{
                reject ('Error en la conexion!');
            }
        }, 3000);
    })
}

// Async await (function declaration)
const ejecutar = async()=>{// 222222 se ejecuta la funcion async
    try{
        console.log(1+1)
        const respuesta = await descargarClientes(); //Se detiene la ejecucion del codigo hasta que se resuelve el promise, si da error salta directamente al catch, caso contrario sigue ejecutando.

        console.log('2+2')
        console.log(respuesta)
    }catch(error){
        console.log(error)
    }
}
ejecutar() //11111 Cuando llamamos la funcion va a 2