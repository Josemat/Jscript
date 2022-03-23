//Pure functions
// Una funcion pura no debe de modificar el valor original (numero)
const numero1 = 20;
// const duplicar = ()=>{}
const duplicar = parametro => parametro * 2; //Gracias a que es un parametro y el return implicito queda de este tamaño la funcion
const resultado = duplicar(numero1);
console.log(resultado);