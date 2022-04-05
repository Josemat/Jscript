//Funciones como argumento
// (programacion funcional)

const suma = (a,b)=> a+b;
const multiplicar = (a,b)=>a*b;

const resultado = fn=>fn(10,20) //A la variable resultado se le pasa una funcion a traves de arrow functions (si bien estamos predefiniendo los numeros 10, 20) y retorna un resultado dependiendo del argumento que le pongamos(suma, multiplicar)
console.log(resultado (suma)) //Exptected output: 30
console.log(resultado (multiplicar)) //Exptected output: 200