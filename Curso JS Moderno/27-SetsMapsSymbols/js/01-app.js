const carrito = new Set() 


//Para agregar valores al Set se utiliza .add(
    carrito.add('Camisa');
    carrito.add('Remera');
    carrito.add('Pantalon');
    carrito.add('Remera'); //NO lo va a agregar porque es un valor repetido
    carrito.add('camisa')//A éste si lo va a agregar ya que es case sensitive
    


console.log(carrito)
console.log(carrito.size) //Se utiliza para saber el tamaño del mismo
//para comprobar si un valor existe en el ser se utiliza el .has
console.log(carrito.has('Remera')); // True
console.log(carrito.has('Chomba'));// False

//Para suprimir valores se utiliza el .delete

carrito.delete('Remera')
//Si hacemos un console.log(carrito.delete('Remera')) devuelve true o false en caso de que no exista el valor 

console.log(carrito.size)
console.log(carrito)

//Para eliminar todos los valores del set se utiliza el clear
// carrito.clear()
// console.log(carrito) 

// Es iterable
carrito.forEach((elemento)=>{
    console.log(elemento)

})


//Ejemplo de entrevista:

//Del siguiente array eliminar los duplicados

const array = [10, 20, 30, 40, 50, 10, 20]
const noDuplicados = new Set(array)
console.log(noDuplicados)