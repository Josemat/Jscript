//WeakSet
//En éste solo se le pueden pasar o agergar objetos


const weakset = new WeakSet()

const cliente = {
    nombre: 'pedro',
    saldo: 100
}
weakset.add(cliente);
console.log(weakset) 
console.log(weakset.size) //No funciona, no puedes conocer el tamaño del weakset
// Un weakset tampoco es iterable.