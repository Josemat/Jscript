const cargarapi = document.querySelector('#cargarAPI')
cargarapi.addEventListener('click', obtenerDatos)

function obtenerDatos(){
    const url = 'https://picsum.photos/list'
    fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado =>mostrarHTML(resultado))
}

function mostrarHTML(datos){
    const contenido = document.querySelector('.contenido')
    let html;

    datos.forEach(element => {
        const {author, post_url} = element
        html +=`
        <p>Autor: ${author} </p>
        <a href = "${post_url}" target="_blank" >Ver imagen</a>
        `
        contenido.innerHTML = html
        });
}