const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded',obtenerDatos())

/*
function obtenerDatos(){
    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(resultado=>console.log(resultado))
        .catch(error=>console.log(error))
}
*/
//la siguiente funcion es la misma que la de arriba
async function obtenerDatos(){
    try{
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);

    }catch(error){
        console.log(error)}
}