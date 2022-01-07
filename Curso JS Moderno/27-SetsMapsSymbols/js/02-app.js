//WeakSet
//En éste solo se le pueden pasar o agergar objetos


const weakset = new WeakSet()

const cliente = {
    nombre: 'pedro',
    saldo: 100
}
weakset.add(cliente);
console.log(weakset)