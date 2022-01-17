(function(){

    let DB;
    const formulario = document.querySelector('#formulario')
    document.addEventListener('DOMContentLoaded',()=>{
        conectarDB();
        
        formulario.addEventListener('submit', validarCliente)
    })

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1)

        abrirConexion.onerror= ()=>{
            console.log('Hubo un error conectando a la DB')
        }
        abrirConexion.onsuccess=()=>{
            DB = abrirConexion.result;
            
        }
    }
    function validarCliente(e){
        e.preventDefault()
        
        //Leer los inputs
        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const telefono = document.querySelector('#telefono').value
        const empresa = document.querySelector('#empresa').value



        if(nombre ==='' || email ==='' || telefono === '' || empresa === ''){
            
            imprimirAlerta('No pueden haber campos vacios','error')
            return
        }
        const cliente = {
                    nombre,
                    email,
                    telefono,
                    empresa,
                    id: Date.now()
                    
                }
                crearNuevoCliente(cliente) //Le enviamos el objeto que acabamos de crear a la funcion de crear cliente
                
        console.log(cliente)
        setTimeout(() => {
            formulario.reset()
        }, 1000);
        
    }

    function crearNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite')
        //El objectStore ees el que hace las acciones, entonces lo creamos
        const objectStore = transaction.objectStore('crm')

        objectStore.add(cliente)

        transaction.onerror = function(){
            console.log('Hubo un error creando el cliente')
        }
        transaction.oncomplete = function(){
            console.log('Cliente creado exitosamente!')
            imprimirAlerta('El cliente fue creado exitosamente!')
        }

    }


    function imprimirAlerta(mensaje, tipo){
        const div = document.createElement('div')
        const alerta = document.querySelector('.alert')
        if(!alerta){
            div.textContent = mensaje
        if(tipo === 'error'){
            
            div.className = 'alert bg-red-100 border border-red-400 text-red-700 mt-5 px-4 py-3 rounded relative'
            
        }else{
            div.className = 'alert bg-green-100 border border-green-400 text-green-700 mt-5 px-4 py-3 rounded relative'
        
        }
        formulario.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 2000);
        }
        
        
    }



})();