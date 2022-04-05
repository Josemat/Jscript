//De organizacion de codigo
//Module patterns

const modulo1 = (function() {
    const nombre = 'Juan';

    function hola(){
        console.log('Hola');
    }

    return {
         nombre,
         hola
    }
})();

modulo1.hola() //Se puede llamar desde otro archivo de ésta forma