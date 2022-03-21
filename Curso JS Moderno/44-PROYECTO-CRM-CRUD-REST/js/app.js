import { consultaClientes, eliminarCliente } from "./API.js"
(function(){// Creamos un IIFE (inmediate invoked function expression)
    const listado = document.querySelector('#listado-clientes')
    listado.addEventListener('DOMContentLoaded', obtenerClientes())
    listado.addEventListener('click',confirmarEliminar)
    async function obtenerClientes(){
        const clientes = await consultaClientes() //Le colocamos await para que haga el console.log una vez haya hecho el fetch, caso contrario va a aparecer un mensaje de pending 
        
        clientes.forEach(element => {
            
            const {nombre, email, empresa, telefono, id} = element
            const row = document.createElement('tr');
            
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;
            listado.appendChild(row)
        });
    }
    function confirmarEliminar(e){
        if(e.target.classList.contains('eliminar')){
            const clienteID = parseInt(e.target.dataset.cliente);
            const confirmar = confirm('Estas seguro que deseas eliminar?')
            if(confirmar){
                eliminarCliente(clienteID)
            }
            
        }
    }
})()