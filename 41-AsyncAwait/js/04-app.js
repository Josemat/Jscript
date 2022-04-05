// Cuando hay 2 promises o trys  para descargar se soluciona de la siguiente manera:

function descargarClientes(){
    return new Promise(resolve=>{
        console.log('Descargando Clientes...');
        setTimeout(() => {
            resolve ('Clientes descargados con exito!')
        }, 5000);
    })
}

function descargarPedidos(){
    return new Promise(resolve=>{
        console.log('Descargando pedidos')
        setTimeout(() => {  
            resolve ('Pedidos descargados!')
        }, 3000);
    })
}

async function app(){
    try{ const respuesta = await Promise.all([descargarClientes(),descargarPedidos()])
        console.log(respuesta)
        console.log(respuesta[0])
        console.log(respuesta[1])
    }
    catch(error){
        console.log(error)
    }

}
app()