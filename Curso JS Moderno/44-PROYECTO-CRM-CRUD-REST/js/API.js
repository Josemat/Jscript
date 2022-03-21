const url = "http://localhost:4000/clientes";
// Crea nuevo cliente--------------
export const nuevoCliente = async cliente =>{ //El async va en la arrow function
    try{
        await fetch(url,{ //y ponemos el await en el fetch, para que recien luego del fetch(o post en este caso), se proceda a ejecutar las siguientes lineas
            method: 'POST', // post seria el equivalente a crear
            body: JSON.stringify(cliente), //Se necesita parsear a string
            headers: {
                'Content-Type':'application/json' //Sin esta linea se guarda un id unicamente.
            }
        });
        window.location.href = 'index.html';

    }catch(error){
        console.log(error)
    }

}
// Consulta los clientes
export const consultaClientes = async () =>{
    try {
        const resultado = await fetch(url);
        const respuesta = await resultado.json()
        return respuesta
    } catch (error) {
        console.log(error)
        
    }
}

// Eliminar un cliente
export const eliminarCliente = async ( id)=>{
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error)
    }
}

// Obtener cliente por id

export const obtenerClienteID = async(id)=>{
    try {
        const resultado = await fetch(`${url}/${id}`)
        const cliente = await resultado.json()
        return  cliente
        
    } catch (error) {
        console.log(error)
    }
}