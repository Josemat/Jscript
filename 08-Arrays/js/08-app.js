const producto ={
    nombre:"monitor",
    precio:300,
    disponibilidad:true
}
//destructuring con objetos-------------------------------------
const {nombre, precio} = producto //se extraen los valores y se los convierte en variables en un solo paso
console.log(nombre)
//Destructuring con arrays--------------------------------------
const numeros = [10,20,30,40]
console.table(numeros)
const [primero, segundo, ...tercero] = numeros
console.log(segundo, primero, tercero)
const array2 = [1,2,3,45,6,7,8]
const [ , , ,cuarentaYcinco] = array2
console.log(cuarentaYcinco)
