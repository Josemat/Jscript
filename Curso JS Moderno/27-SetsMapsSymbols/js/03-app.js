//Los maps son listas ordenadas en llave y valor

const cliente = new Map()

// para agergar un elemento (el mismo puede ser cualquier tipo de dato)

cliente.set('nombre','karen') //String
cliente.set('tipo','premium')
cliente.set('saldo',300) //Numeros
cliente.set(true, false) //Boolean
cliente.set(['agua','cate'], false) //arrays


console.log(cliente)
console.log(cliente.size) //Para saber el tamaño
console.log(cliente.has('saldo')) //Para comrpobar si existe un valor

// Para obtener valores se utiliza el .get

console.log(cliente.get('tipo'))
console.log(cliente.get('karen')) //Si le pasamos el nombre de una llave que no existe nos va a dar como resultado Undefined


// Para eliminar un valor es con .delete

cliente.delete('saldo')
console.log(cliente.get('saldo'))


// Se puede iniciar un map con valores
const paciente = new Map([['nombre','paciente'],['cuarto','no definido'] ])
// Y agregarsele valores con un set
paciente.set('dr','Antonio')
// Como reescribir o cambiar datos
paciente.set('nombre','pedro')
console.log(paciente)

// Estos mismos se pueden iterar
paciente.forEach(dato=>
    console.log(dato))