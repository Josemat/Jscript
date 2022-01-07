// Symbols
// te permiten crear una propiedad unica

const sym = Symbol()
const sym2 = Symbol()
if(sym === sym2){
    console.log('Son iguales')

}else{
    console.log('Son diferentes') //A pesar de que son iguales son unicos y va a dar éste resultado
}


const nombre = Symbol();
const apellido = Symbol();

const persona = { }
persona[nombre]= "Ema";
persona[apellido] = "Tulian" //De esta forma se modifican los valores
persona.tipoCliente= 'Premium' //De esta manera se le agregan valores  los objetos
persona.saldo = 3000;

console.log(persona)
console.log(persona[nombre]) //Para acceder al valor del symbol

//Los symbol NO SON ITERABLES
for(let i in persona){//Esto nos va a devolver los valores que no sean symbol
    console.log(i)
}
// Definir descripcion del symbol

const nombreCliente = Symbol('Nombre del cliente')
const cliente = {}
cliente[nombreCliente] = 'pedro'
console.log(cliente)
console.log(cliente[nombreCliente])//Para acceder directamente al valor seria asi