/*

//Crear nuevo enlace
const enlace = document.createElement('a')
enlace.textContent = 'New link'
enlace.href= 'www.google.com'

//Buscamos el path donde queremos insertarlo:

const navegacion = document.querySelector('nav')
console.log(navegacion.children) //Listamos

navegacion.appendChild(enlace) //Appendchild agrega al final
navegacion.insertBefore(enlace, navegacion.children[2]) // Seleccionamos mediante .children la posicion donde lo queremos

*/

//En caso de querer agregar un nuevo card dinamicamente

const parrafo1 = document.createElement('p')
 parrafo1.textContent = 'Concierto'
 parrafo1.classList.add('categoria', 'concierto')
const parrafo2 = document.createElement('p')
 parrafo2.textContent = 'Concierto de penes'
 parrafo2.classList.add('titulo')
const parrafo3 = document.createElement('p')
 parrafo3.textContent = '$1500 per cabeza'
 parrafo3.classList.add('precio')

 const info = document.createElement('div')
 info.classList.add('info')
 info.appendChild(parrafo1)
 info.appendChild(parrafo2)
 info.appendChild(parrafo3)

 const imagen = document.createElement('img')
 imagen.src= 'img/hacer4.jpg'
 imagen.alt = 'Vaya a saber que mierda'

 const card = document.createElement('div')
 card.classList.add('card')
 card.appendChild(imagen)
 card.appendChild(info)

 const agregar = document.querySelector('.hacer .contenedor-cards')

//  agregar.appendChild(card)
//Agregarlo en una posicion que querramos
agregar.insertBefore(card, agregar.children[2] )