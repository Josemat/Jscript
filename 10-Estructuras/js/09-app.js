const autenticado = true;
const puedepagar = true;
console.log(autenticado? 'Si esta autenticado': 'No no esta autenticado')
console.log(autenticado&&puedepagar? 'Si esta autenticado y puede pagar': 'No no esta autenticado')
//console.log(variable a evaluar? 'Si': 'else')

//If's anidados
const efectivo = 700
const tarjeta = 800
const disponible = efectivo+tarjeta
const total = 800

// if(efectivo>total || tarjeta >total || disponible>total){
//     if(efectivo>total){console.log('Si puede pagar con eft')}
//     if(tarjeta>total){console.log('Si puede pagar con tarj')}
//     if(disponible>total){console.log('Si puede pagar con ambos')}
// }
// else{
//     console.log('No no puede pagar')
// }

// El codigo de arriba se puede reemplazar con ternarios de la siguiente manera:

console.log(efectivo>total || tarjeta>total ? efectivo>total? 'Si paga con efectivo':'No, paga con tarjeta':'No tiene Fondos suficientes')
