//parametros por default
function saludar1(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}!`)
}
saludar1('juan', 'carlos');
saludar1('juan');//para que no aparezca el "undefined", debemos agregar en los parametros de valores(es decir, cuando declaramos la funcion) un equivalente.
function saludar (nombre = 'Desconocido', apellido = ''){//agregandole el igual y un string vacio toma ese valor al encontrar un parametro vacío
console.log(`Hola ${nombre} ${apellido}!`)
}
saludar('juan');
saludar()
