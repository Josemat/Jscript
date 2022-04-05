const obtenerNombre =()=>{
    const nombre = "Emma";
    function muestraNombre(){
        console.log(nombre)
    }
    return muestraNombre; //Si aca le pones parentesis se autoejecuta
}
const cliente = obtenerNombre();
cliente()
