// Stack o pila y cola (queue) de eventos
// El orden en el cual se van a ir ejecutando seria:

// console.log's
//funciones(hola())
//promises
//timeouts


console.log('Primero')
setTimeout(() => {
    console.log('segundo')
}, 0);
console.log('tercero');
setTimeout(() => {
    console.log('Cuarto')
}, 0);
 new Promise(function (resolve){
     resolve ('desconocido')
 }).then(console.log)
 console.log('Ultimo')
 function hola (){
     console.log('hola')
 }
 hola()