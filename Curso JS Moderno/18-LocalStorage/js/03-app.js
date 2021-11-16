localStorage.removeItem('objeto nuevo')
localStorage.removeItem('jose')
localStorage.removeItem('nombre')

//Crear array, leerlo, modificarlo, parsearlo a string y volver a reescribir
const array = ['enero', 'febrero', 'marzo']
localStorage.setItem('meses', JSON.stringify(array))
console.log(localStorage.meses)
const nuevoArray = JSON.parse(localStorage.getItem('meses'))

nuevoArray.push('nuevo mes')
console.log(nuevoArray)
localStorage.setItem('meses', JSON.stringify(nuevoArray))
console.log(localStorage.meses)

//Para borrar localstorage:
localStorage.clear()