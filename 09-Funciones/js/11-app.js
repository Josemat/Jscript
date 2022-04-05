//Ventajas de un ArrowFunction vs una Function

const saludar = function(nombre){
    console.log(`Hola ${nombre}`)
}
saludar("Ema");
//En un Arrow Function no es necesario poner entre parentesis el parametro (SOLO SI ES UNO!!!)
const saludarArrow = nombre => `Buenas tardes ${nombre}`;
console.log(saludarArrow('Emma'))

//En el caso de que sean 2 o mas parametros si es necesario el parentesis---------------------

const saludarArrow2 = (nombre, apellido)=> `Hola ${nombre} ${apellido}, como estás chupapi...`;
console.log(saludarArrow2('juan', 'carlos'))