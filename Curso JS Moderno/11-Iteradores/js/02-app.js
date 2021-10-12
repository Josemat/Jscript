//Break y continue
/*En un for loop te sirve para:
BREAK: -> rompe la ejecucion, es decir, termina el "for" en ese lugar
CONTINUE: -> Rompe la ejecucion pero sin terminar el "for", vuelve a iterar sin repetir linea
*/
// for(let i=0;i<10;i++){
//         if(i===5){
//         console.log(`Acá es Cinco`)
//         continue;                   //Cuando se ejecuta el if, el continue manda la ejecucion al iterador en lugar de seguir ejecutando
//         }
//         console.log(i) 
// }
// console.log("aca abajo va el ejemplo de break")
// for(let a=0; a<10;a++){
//     if(a===5){
//         console.log("cinco");
//         break; //cuando se ejecuta break el for DEJA de ejecutarse
//     }
//     console.log(a)
// }


//Ejemplo practico:

const carrito =[
    {nombre: "tablet", precio:3100},
    {nombre: "celular", precio:3000},
    {nombre: "mouse", precio:350, descuento:true},
    {nombre: "monitor", precio:3200},
    {nombre: "teclado", precio:300}
]

for(let i=0;i<carrito.length;i++){
    if(carrito[i].descuento){
        console.log(`El producto ${carrito[i].nombre} tiene descuento`)
    continue
    }
    console.log(`El producto ${carrito[i].nombre} tiene un costo de ${carrito[i].precio}`)
}

