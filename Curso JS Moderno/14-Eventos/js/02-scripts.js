//Eventos mouse

const navegacion = document.querySelector('nav')
navegacion.addEventListener('click', ()=>{console.log('Hiciste click ameo')})
navegacion.addEventListener('mouseover', ()=>{console.log('mouse over')})
navegacion.addEventListener('mouseleave', ()=>{console.log('mouse leave')})
navegacion.addEventListener('mouseenter', ()=>{console.log('mouse enter')})
navegacion.addEventListener('mousedown', ()=>{console.log('MouseDown')})//cuando apretas el click
navegacion.addEventListener('mouseup', ()=>{console.log('MouseUp')})//cuando soltas el click