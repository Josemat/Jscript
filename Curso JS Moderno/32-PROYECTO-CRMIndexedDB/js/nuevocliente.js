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
        console.log('hola')

        //Leer los inputs
        const nombre = document.querySelector('#nombre').value
        const correo = document.querySelector('#correo').value
        const telefono = document.querySelector('#telefono').value
        const empresa = document.querySelector('#empresa').value



        if(nombre ==='' || correo ==='' || telefono === '' || empresa === ''){
            console.log('No pueden haber campos vacios')
            return
        }
        
    }




})();