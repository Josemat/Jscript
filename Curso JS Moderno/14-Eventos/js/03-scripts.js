const evento = document.querySelector('.busqueda')
evento.addEventListener('keydown', ()=>{console.log('keydown')}) //keydown, keyup, keyboard
evento.addEventListener('keyup', ()=>{console.log('keyup')}) //keydown, keyup, keyboard
evento.addEventListener('blur', ()=>{console.log('Cuando salgo del formulario')}) //keydown, keyup, keyboard
evento.addEventListener('input', (e)=>{console.log(e.target.value)}) //Con esta pieza de codigo nos sirve para saber lo que un usuario escribe en un form por ejemplo
