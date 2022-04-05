// import { suma } from "../js/funciones";
function suma(a,b){
    return a+b
}
describe('Testing modulos',()=>{
    test('suma',()=>{
        expect(suma(10,20)).toBe(30)
    })
})