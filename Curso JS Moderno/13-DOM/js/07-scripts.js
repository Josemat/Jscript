const encabezado = document.querySelector('h1')
encabezado.style.backgroundColor = 'rgb(255,0,255)'
encabezado.style.fontFamily = 'Monospace'
encabezado.style.textTransform = 'UpperCase'

const card = document.querySelector('.card:nth-child(1)');
//Borrar clases en JS
card.classList.add('pepe','segundo');
card.classList.remove('card');