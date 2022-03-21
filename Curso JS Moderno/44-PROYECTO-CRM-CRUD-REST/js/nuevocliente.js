(function(){
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',validarDatos)

function validarDatos(e){
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const email = document.querySelector('#email').value
    const telefono = document.querySelector('#telefono').value
    const empresa = document.querySelector('#empresa').value

    const cliente = {
        nombre,
        email,
        telefono,
        empresa
    }
    console.log(Object.values(cliente))
}

})();