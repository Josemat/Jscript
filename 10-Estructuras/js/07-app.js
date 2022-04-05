// Uso del OR

const efectivo = 200;
const tarjeta = 500;
const disponible = efectivo+tarjeta;
const totalPagar = 600

if(efectivo>totalPagar || tarjeta>totalPagar || disponible>totalPagar){
console.log('Si puede pagar')
}else{
    console.log('No puede pagar')
}