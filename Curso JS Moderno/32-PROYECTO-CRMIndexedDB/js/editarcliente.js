(function(){

    document.addEventListener('DOMContentLoaded',()=>{
        const cliente = window.location.search.slice(4)
        
        /*
        // Otra forma mas pro de buscar los parametros pasados por una url es:
        const parametrosURL = new URLSearchParams(window.location.search)
        const idCliente = parametrosURL.get('id')
        console.log(idCliente)
        */

        // DEBEMOS validar si hay busqueda de id 
        if(cliente){
            
        editarCliente(cliente)
        }else
        console.log('No hay nada pa mostrar')
    })
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit',guardarCliente)
    
    let DB;
    function editarCliente(cliente){
        
        //abrir la conexion
        const abrirConexion = window.indexedDB.open('crm', 1)
        
        abrirConexion.onerror= function(){
            console.error('Hubo un error mostrando los clientes')
        }
        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result
            //Obtenemos los datos de la DB
            
            const objectStore = DB.transaction('crm').objectStore('crm')
            objectStore.openCursor().onsuccess = function(e){
                const cursor = e.target.result
                if(cursor){
                    
                    const cliente1 = cursor.value.id
                    const cliente2 = Number(cliente)
                    
                    if(cliente1 === cliente2){
                        const {nombre, email, telefono, empresa } = cursor.value
                        document.querySelector('#nombre').value = nombre
                        document.querySelector('#email').value = email
                        document.querySelector('#telefono').value = telefono
                        document.querySelector('#empresa').value = empresa
                    }
                    cursor.continue()
                }
                }
            }
        }
        
    function guardarCliente(e){
        e.preventDefault()
        console.log(e.target)
    }

})();