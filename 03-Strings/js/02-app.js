const producto = 'Monitor 20"'
console.log(producto);

// conocer el largo de la string
console.log(producto.length);

console.log(producto.includes('tablet'));//va a decir 'false'ya que no hay tablet en el string
console.log(producto.includes('Monitor'));//true
console.log(producto.includes('monitor'));// false ya qu esta con minusculas