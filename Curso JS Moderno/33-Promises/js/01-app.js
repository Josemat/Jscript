const paises = ['Francia','España', 'Portugal','Australia','Inglaterra']

function agegarPais(pais, callback){
    setTimeout(() => {
        paises.push(pais)
        callback();
    }, 1500);
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais=>
            console.log(pais))
    }, 750);
}


mostrarPaises()

agegarPais('Argentina',mostrarPaises)