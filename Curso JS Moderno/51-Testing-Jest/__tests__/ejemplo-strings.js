const password = "123456"
describe('Valida que el password no este vacio y tenga una extension de mas de 6 caracteres',()=>{
    test('Que el password tenga 6 caracteres',()=>{
        expect( password ).toHaveLength(6);
    })
    test('Password no vacio',()=>{
        expect(password).not.toHaveLength(0);
    })
})