const carrito = ['prod1','prod2','prod3'];

describe('Testing al carrito de compras',()=>{
    test('Probar que el array tenga 3 elementos',()=>{
        expect(carrito).toHaveLength(3);
        });
    test('Probar que no esté vacio',()=>{
        expect( carrito ).not.toHaveLength(0);
    });
})