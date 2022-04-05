const texto = document.querySelector('.contenido-hero h1') //La sintaxis de seleccion es .clase_espacio_elementoASeleccionar
//Existen 3 formas de seleccionar el texto en un elemento:

console.log(texto.innerText) //trae el texto con sus decoraciones
console.log(texto.textContent)//cita el texto textual, ignorando etiquetas
console.log(texto.innerHTML)//trae el pedazo de codigo tal cual el html

//Chaining de codigo
const hache1 = document.querySelector('h1').innerText
document.querySelector('h1').innerText = 'Hola Wacho'
console.log(hache1)



const imagen = document.querySelector('.card:nth-child(2) img')

imagen.src='img/hacer1.jpg'

console.log(imagen)