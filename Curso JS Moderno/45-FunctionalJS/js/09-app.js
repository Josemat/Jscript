const suma = (a,b,c) => a+b+c;

const parcial = a=>(b,c)=>suma(a,b,c)
const primerNumero = parcial(5)
const resultado = primerNumero(4,3);
console.log(resultado) //12

const partial = a =>b => c => suma(a,b,c)

const primNum = partial(5);
const segNum = primNum(4)
const resulta2 = segNum(3);

console.log(resulta2) //12
//--------------El codigo de arriba puede simplificarse a:
const partial2 = a => b => c => suma(a,b,c)
const resulta3 = partial2(5)(4)(3);
console.log(resulta3)