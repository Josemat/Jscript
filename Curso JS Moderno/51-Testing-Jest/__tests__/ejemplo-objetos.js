const cliente = {
    nombre: 'Emmanuel',
    balance: 500
}

describe('Testing al cliente',()=>{
    test('El cliente es premium',()=>{
        expect(cliente.balance).toBeGreaterThan(400);
    })
    test('Que el cliente sea Emmanuel',()=>{
        expect(cliente.nombre).toBe('Emmanuel')
    })
    test('Comprobando que no sea determinado cliente',()=>{
        expect(cliente.nombre).not.toBe('Juan')
    })
})