const cargar = document.querySelector('#cargarJSONArray')
cargar.addEventListener('click', mostrarArray)

function mostrarArray(){
    const url = 'data/empleados.json'
    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(resultado => mostrarHTML(resultado))

}

function mostrarHTML(contenido){
    const conti = document.querySelector('.contenido')
    let HTML;
    contenido.forEach(element => {
        const {id, nombre, empresa, trabajo} = element
        HTML +=`
            <p>Nombre: ${nombre}</p>
            <p>Id: ${id}</p>
            <p>trabajo: ${trabajo}</p>
            <p>Empresa: ${empresa}</p>
            `
    });
    conti.innerHTML = HTML
}