// CallBackHell
const paises = []


function nuevoPais(pais, callback){
    paises.push(pais)
    console.log(`Agregado ${pais}-------------`)
    callback()

}


function mostrarPaises(){
    paises.forEach(element => {
        console.log(element)
    });


}

function iniciarCallBackHell(){
setTimeout(() => {
    nuevoPais('Alemania', mostrarPaises)
    setTimeout(() => {
        nuevoPais('Argentina', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Brasil', mostrarPaises)
        }, 3000);
    }, 3000);
}, 3000);

}

iniciarCallBackHell();