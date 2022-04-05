//FOR IN
//Mientras que "for of" itera sobre un array, "for in" itera sobre un objeto



const automovil = {
    modelo: "camaro",
    year: 1989,
    motor:6.0
}

for(propiedad in automovil){
    console.log(propiedad)//Sin embargo, de esta forma itera sobre la propiedad, no el valor
    }
for(propiedad in automovil){
    console.log(`${automovil[propiedad]}`) //De ésta manera se puede hacer iterar sobre los valores
}



//Otra forma de usar el "for of" en objetos

for(let [nombre, propiedad] of Object.entries(automovil)){
    console.log(nombre)
    console.log(propiedad)

}