iniciarApp();
function iniciarApp(){
console.log('Iniciando App...')     
segundaFuncion()
}

function segundaFuncion(){
    console.log("desde la segunda funcion")
usuarioAutenticado("Pepe")
}

function usuarioAutenticado(usuario){
    console.log(`Autenticando usuario`)
    console.log(`Usuario autenticado exitosamente: ${usuario}`)
}