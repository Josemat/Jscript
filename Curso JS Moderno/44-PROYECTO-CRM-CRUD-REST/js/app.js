import { consultaClientes } from "./API.js"
(function(){// Creamos un IIFE (inmediate invoked function expression)
    const listado = document.querySelector('#listado-clientes')
    listado.addEventListener('DOMContentLoaded', obtenerClientes())
    async function obtenerClientes(){
        const clientes = await consultaClientes()
        console.log(clientes)
    }
})()