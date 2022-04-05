//For each

const tareas =['tarea', 'comer', 'proyecto', 'estudiar'];

tareas.forEach( (parametro)=>{console.log(parametro)})
tareas.forEach(parametro1=>console.log(parametro1));//al tener un parametro se pueden eliminar los parentesis, asi como tambien el corchete

const carrito = [
    {nombre: "monitor", precio:500},
    {nombre: "gabinete", precio:100},
    {nombre: "teclado", precio:50},
    {nombre: "mouse", precio:70}
]
carrito.forEach(nombre=>console.log(`El valor de ${nombre.nombre} es de ${nombre.precio}`))

const nuevoArray = carrito.forEach(nombre=>`${nombre.nombre} sale: ${nombre.precio} `)// Se le saca el console.log ya que esta implicito el return. este va a dar undefined
const nuevoArray2 = carrito.map(nombre=>`${nombre.nombre} sale: ${nombre.precio} `)// Se le saca el console.log ya que esta implicito el return. este va a dar los valores ya que crea el array

console.log(nuevoArray)
console.log(nuevoArray2)