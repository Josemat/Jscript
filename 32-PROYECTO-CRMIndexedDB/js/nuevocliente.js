(function(){

    
    document.addEventListener('DOMContentLoaded',()=>{
        conectarDB();
        
        formulario.addEventListener('submit', validarCliente)
    })

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
                
                imprimirAlerta('El cliente fue creado exitosamente!')
                setTimeout(() => {
                    window.location.href = 'index.html'
                }, 2250);
            }


    }


   
    



})();