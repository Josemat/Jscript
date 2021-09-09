const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 =  20;




// transformar string en numero
console.log(numero1);
console.log(Number.parseInt(numero1));//parceint (int=entero), asi que transforma a un numero entero
console.log(Number.parseFloat(numero2));//parcefloat decimal
console.log(parseInt(numero3));// Va a salir NaN (Not A Number)

// Revisar si un numero es entero o no

console.log(Number.isInteger(numero4))
console.log(Number.isInteger(numero3))
