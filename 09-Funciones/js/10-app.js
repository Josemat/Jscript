//Arrow Functions

//Funcion clasica---------------------------
const saludar = function(){
    console.log("Hola wachos")
}
saludar()

//Arrow Function ----------------------------
const saludar2 =
                 ()=>//La expresion "function" es reemplazada por "=>" a la derecha del parentesis
                        "Hola locura";//en funciones de una linea no es necesario las llaves "{}"
                        //Así como tambien es implicito el RETURN


console.log(saludar2())

