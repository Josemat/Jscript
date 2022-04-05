function suma (a,b){
    return a + b;
}
function resta (a,b){
    return a - b;  
}
describe('Testing a las funciones de suma y resta',()=>{
    test('Probando la funcion de suma',()=>{
        expect(suma(1,2)).toBe(3)
    })
})