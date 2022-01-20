
    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1)

        abrirConexion.onerror= ()=>{
            console.log('Hubo un error conectando a la DB')
        }
        abrirConexion.onsuccess=function(){
            DB = abrirConexion.result;
            
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
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 2250);
            
        }
        formulario.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 2000);
        }
        
        
    }