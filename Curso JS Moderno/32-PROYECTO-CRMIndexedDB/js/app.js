(function(){ //IIFE nos permitia ejecutar el codigo de manera local
    const listadoClientes = document.querySelector('#listado-clientes')
  
    document.addEventListener('DOMContentLoaded',()=>{
        crearDB();
        if(window.indexedDB.open('crm',1)){
            setTimeout(() => {
                mostrarClientes();
            }, 50);
        }
        listadoClientes.addEventListener('click',eliminarCliente)
    })

    function crearDB(){
        const crearDB = window.indexedDB.open('crm', 1)

        crearDB.onerror = ()=>{
            console.log('Ha habido un error')
        }
        crearDB.onsuccess= ()=>{
            console.log('DB creada con exito')
            DB = crearDB.result //Le asigna el valor de success de "Crear DB" al valor DB

            
        }
        crearDB.onupgradeneeded = (e)=>{

            const db = e.target.result
            
            const objectStore = db.createObjectStore('crm', { keyPath:'id' , autoIncrement: true})

            objectStore.createIndex('nombre','nombre',{unique:false})
            objectStore.createIndex('email','email',{unique:true})
            objectStore.createIndex('telefono','telefono',{unique:false})
            objectStore.createIndex('empresa','empresa',{unique:false})
            objectStore.createIndex('id','id',{unique:true})

            console.log('DB lista y creada!') 
        }
        
    }

    function mostrarClientes(){
        //abrir la conexion
        const abrirConexion = window.indexedDB.open('crm', 1)
        abrirConexion.onerror= function(){
            console.error('Hubo un error mostrando los clientes')
        }
        abrirConexion.onsuccess = function(){
            //Obtenemos los datos de la DB
            const objectStore = DB.transaction('crm').objectStore('crm')
            objectStore.openCursor().onsuccess = function(e){
                const cursor = e.target.result
                if(cursor){
                    const {nombre, email, telefono, empresa, id} = cursor.value
                    
                    listadoClientes.innerHTML +=
                                            ` <tr>
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
                            </tr>
                        `; 
                    cursor.continue();
                }
            }
        }

        }
    
    
    function eliminarCliente(e){
        if(e.target.classList.contains('eliminar')){
            const idCliente = Number(e.target.dataset.cliente)
            const transaction = DB.transaction(['crm'],'readwrite')
            const objectStore = transaction.objectStore('crm')
            const confirmar = confirm('Estas seguro de querer eliminar?')
            if(confirmar){
            objectStore.delete(idCliente)
            transaction.onerror = function(){
                imprimirAlerta('Hubo un error!')
            }
            transaction.oncomplete = function(){
                
                // Traversing the DOM
                listadoClientes.parentElement.parentElement.remove(); //Vamos al padre y al padre y lo eliminamos
            }}

        }
    }





})();