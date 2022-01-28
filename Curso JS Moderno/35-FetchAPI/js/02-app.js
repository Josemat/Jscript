const cargarJSON = document.querySelector('#cargarJSON')
cargarJSON.addEventListener('click', obtenerDatos)

function obtenerDatos(){
    fetch('data/empleado.json')
    .then(resu => resu.json())
    .then(resultado => mostrarHTML(resultado))
}


function mostrarHTML({empresa, nombre, id, trabajo}){
    const div = document.querySelector('.contenido')
    div.innerHTML= `
    <p>Nombre: ${nombre}</p>
    <p>id: ${id}</p>
    <p>trabajo: ${trabajo}</p>
    <p>Empresa: ${empresa}</p>
    `
}