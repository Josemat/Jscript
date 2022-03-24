//Funciones que retornan funciones
// Se podria decir que se lee al reves
const obtenerClientes = ()=>()=> console.log('Hola loco')
const fn = obtenerClientes() // Y este llama a la funcion adentro de la funcion(console.log)
fn() //Cuando llamamos a fn nos retorna obtenerClientes