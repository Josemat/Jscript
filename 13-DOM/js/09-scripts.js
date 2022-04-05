//Eliminar elementos del html

// const primerenlace = document.querySelector('a')
// primerenlace.remove();

//Eliminar objetos desde el padre
const navegacion = document.querySelector('.navegacion') //Seleccionamos la clase navegacion
console.log(navegacion.children)//con .children listamos los elementos
navegacion.removeChild(navegacion.children[2]) //elegimos el path a eliminar en el parentesis