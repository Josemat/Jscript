
document.addEventListener('DOMContentLoaded', ()=>{
    crearDB()

    setTimeout(() => {
        crearCliente()
    }, 3000);
})
let DB
function crearDB(){

    // Crear DB version
    const crmDB = window.indexedDB.open('crm', 1) //Nombre, version
    crmDB.onerror = function(){ //Si se genera un error
        console.log('Error creando DB')
    }
    crmDB.onsuccess = function(){
        console.log('DB creada satisfactoriamente!')
        DB = crmDB.result
    }

    // Configurar DB
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result //Para tener la referencia de la base de datos
        const objectStore = db.createObjectStore('crm',{ //Objeto de configuracion
            keypath: 'crm',
            autoIncrement: true //Base de datos autoincrementable
        })

        //Definir las columnas
        // objectStore.createIndex('nombreDelValor','keyPath',{parametros})
        objectStore.createIndex('Name','nombre',{unique:false}) //nombre de la columna, valor, (se pueden tener 2 nombres iguales y no ser valores unicos)
        objectStore.createIndex('email','email',{unique:true})
        objectStore.createIndex('telefono','Telefono',{unique:true})

        console.log('Columnas creadas!')
    }
       
}
function crearCliente(){
    let transaction = DB.transaction(['crm'],'readwrite') //En donde va a ser y puede ser escritura(writeonly) lectura(readonly) o ambos(readwrite)
    transaction.oncomplete = function(){
        console.log('transaccion completada')
    }
    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion')
    }
    //escribir un objeto en nuestra DB
    const objetStore = transaction.objectStore('crm') //Le decimos que lo vamos a crear en crm
    const nuevoCliente = {
        telefono: 1237981723,
        nombre: 'Emma',
        email: 'emma@asd.com'
    }
    //con el objeto de cliente creado adelante utilizamos los metodos
    const peticion = objetStore.add(nuevoCliente)
    console.log(peticion)
}