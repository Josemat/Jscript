(function(){ //IIFE nos permitia ejecutar el codigo de manera local

    let DB;
    document.addEventListener('DOMContentLoaded',()=>{
        crearDB();
        mostrarClientes();
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
                    

                    cursor.continue();
                }
            }
        }

        }
    
    
    





})();