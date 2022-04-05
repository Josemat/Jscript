// Importar variables/funciones de otros archivos:
// RECORDAR agregar el type="module" al html
import { Cliente, datosCliente, name,saldo, tieneAhorro as tAhorro } from './cliente.js' //recordar utilizar la extension del archivo, y primero seleccionar el archivo así VSCode nos autocompleta
import{Empresa} from './empresa.js'
// console.log(pedro)
console.log(saldo)

console.log(datosCliente(name, saldo))//Se pueden importar funciones
console.log(tAhorro(saldo))
const cliente = new Cliente(name, saldo) //Se pueden importar clases
console.log(cliente.mostrarInformacion())
console.log(cliente)
const empresa = new Empresa('Emmanuel', 300, 'DevWeb')
console.log(empresa) 
console.log(empresa.mostrarInformacion()) 
