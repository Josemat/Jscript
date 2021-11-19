const dia = new Date()
//const dia = new Date(dia, mes, año) y se puede averiguar que dia cae y todo eso
let valor;
valor = dia
//Metdodos para el objeto de fecha
valor = dia.getFullYear()
valor = dia.getMonth()
valor = dia.getDay()
valor = dia.getTime()// son los mili desde 1 ene 1970

//Get sirve para extraer el valor, SET para establecer el valor

valor = dia.setFullYear(1989)
valor = dia.setMonth(11)
valor= dia.setDate(27)


console.log(dia)
console.log(typeof dia)// son objetos
