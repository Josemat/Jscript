            // Function Declaration o declaracion de la funcion:


suma(); //------------------Si se le llama antes de declararla  de esta manera funciona por hoisting
function suma (){
    console.log(2+2)
}
suma();
            //Function Expression o expresion de la funcion


suma3(); //Sin embargo si se llama esta funcion declarada de ésta forma, js la tilda de funcion no inicializada
const suma3 = function(){
    console.log(3+3)
}
suma3();

