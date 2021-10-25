// const navegacion = document.querySelector('.navegacion')
// console.log(navegacion)
// console.log(navegacion.childNodes)//te muestra los nodos, incluyendo los saltos de linea que te los toma como uno
// console.log(navegacion.children)//Este muestra correctamente los datos
// console.log(navegacion.children[2])//Se puede acceder a sus elementos como si fuese un array

// const entrada = prompt('Ingrese valor requerido', '1000')
// const card  = document.querySelector('.card')
// card.children[1].children[2].textContent = '$4500'//Se pueden modificar los datos 
// console.log(card.children[1].children[2].textContent)

//Traversing hacia nodos padres

const card2 = document.querySelector('.card');
// console.log(card2.parentNode)
console.log(card2.parentElement) //Se recomienda utilizar éste ya que ignora los espacios en blanco (AKA childNodes)
console.log(card2.parentElement.parentElement)


//Traversing hacia hermanos en el codigo
console.log(card2.nextElementSibling)

console.log(card2.lastElementChild)
console.log(card2.firstElementChild)
