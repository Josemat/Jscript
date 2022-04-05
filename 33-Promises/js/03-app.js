//Promises

const aplicarDescuento = new Promise((resolve,reject)=>{

    const valor = true;
    if(valor){
        resolve('Hay descuento aplicado')
    }else{
        reject('No hay descuento aplicado')
    }
})

console.log(aplicarDescuento)
// Tiene 3 posibles valores:
// <Fullfied> - Significa que se cumple la promesa
// <Rejected> - La promesa no se cumple
// <Pending> - No es positivo ni negativo

aplicarDescuento
    .then((resultado)=>{ //Si el resultado de la promise es positivo y entra al resolve el resultado se muestra a traves de un .then y un arrow function
    console.log(resultado)
    })
    .then(resultado=> imprimirMensaje(resultado)) //Recordar pasar solo 1 .then()
    .catch(error=>console.log(error)) //En caso de ser negativo a traves de un catch y tambien con un arrowFunction
        


function imprimirMensaje(mensaje){
    console.log(mensaje)
}