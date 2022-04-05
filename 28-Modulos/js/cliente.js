// IIFE (funcion que se ejecuta instantaneamente)(inmediately invoked function expression)
// Sirve para aislar o hacer privado un codigo
/*
(function(){
console.log('hola! desde la IIFE')
const pepe = 'pepe' //Deja de ser variable global, sin embargo suelen hacer lo siguiente para invocar globalmente
window.nombre = 'pepe'
})();
*/

// ---------------------Mejor forma de exportar e importar variables--------------------
export const name = 'pedro'
export const saldo = 200;
export function datosCliente(nombre, saldo){
    return `El cliente ${nombre} tiene un saldo de : $${saldo}`
}
export function tieneAhorro(saldo){
    if(saldo > 0 ){
        return `El cliente tiene ahorros ($${saldo})`
    }else{
        return `El cliente es un pobre de mierda`
    }
}
export class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre
        this.saldo = saldo
    }
    mostrarInformacion(){
        return `Cliente ${this.nombre} - Saldo: $${this.saldo}`
    }
}