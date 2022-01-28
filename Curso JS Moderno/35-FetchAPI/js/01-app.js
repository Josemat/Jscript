const obtenerDatosBtn = document.querySelector('#cargarTxt')
obtenerDatosBtn.addEventListener('click', obtenerDatos)

function obtenerDatos(){

    const url   =   'data/datos.txt'
    fetch(url)
            .then(respuesta => { //El primer .then nos da el resultado
                console.log(respuesta)
                console.log(respuesta.status)//El status es el que nos define justamente el status de la request
                console.log(respuesta.statusText)//El status es el que nos define justamente el status de la request
                return respuesta.text() //con la respuesta ok le hacemos retornar el valor al proximo .then
            })
            .then(datos => {//el segundo .then con el return del anterior devuelve el valor del archivo
                console.log(datos)
            })
            .catch (error => console.log(error))
}