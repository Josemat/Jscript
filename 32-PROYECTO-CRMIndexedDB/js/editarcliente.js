(function(){

   const nombreInput = document.querySelector('#nombre')
   const emailInput  = document.querySelector('#email')
   const telefonoInput = document.querySelector('#telefono')
   const empresaInput = document.querySelector('#empresa')
    let idCliente;
    document.addEventListener('DOMContentLoaded',()=>{
        conectarDB()
        const cliente = window.location.search.slice(4)
        
        /*
        // Otra forma mas pro de buscar los parametros pasados por una url es:
        const parametrosURL = new URLSearchParams(window.location.search)
        const idCliente = parametrosURL.get('id')
        console.log(idCliente)
        */
        const formulario = document.querySelector('#formulario')
            formulario.addEventListener('submit',guardarCliente)
        // DEBEMOS validar si hay busqueda de id 
        if(cliente){
            setTimeout(() => {//El timeout sirve para que cuando aparece el clasico que no se pueden leer propiedades de 'transaction' es porque conectarse a la DB demora, entonces al llamar la funcion con delay le da tiempo a generar la conexion                
        editarCliente(cliente)
            }, 50);
        }else
        console.log('No hay nada pa mostrar')

    })
    
    
 
    
    function editarCliente(cliente){
        
        
        const objectStore = DB.transaction('crm').objectStore('crm')
        objectStore.openCursor().onsuccess = function(e){
            const cursor = e.target.result
            if(cursor){
                
                const cliente1 = cursor.value.id
                const cliente2 = Number(cliente)

                // console.log(cliente1)
                // console.log(cliente2)
                
                if(cliente1 === cliente2){
                   
                        
                    const {nombre, email, telefono, empresa, id } = cursor.value
                    nombreInput.value = nombre
                    emailInput.value = email
                    telefonoInput.value = telefono
                    empresaInput.value = empresa
                    idCliente = id
                    
                }
                cursor.continue()
            }
            }
        }
        
    function guardarCliente(e){
        e.preventDefault()
        if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === '' ){
            imprimirAlerta('Todos los campos son obligatorios','error')
            return
        }
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idCliente
        }
        
        const transaction = DB.transaction(['crm'], 'readwrite')
        const objectStore = transaction.objectStore('crm')
        
        objectStore.put(clienteActualizado)
        transaction.onerror = ()=>{
            imprimirAlerta('Hubo un error inesperado','error')
        }
        transaction.oncomplete= function(){
            imprimirAlerta('Cliente actualizado correctamente')
        }
    }

})();