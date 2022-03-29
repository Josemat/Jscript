// Explicit binding
function persona(el1,el2){
    console.log(`Mi nombre es ${this.nombre} y me gusta el ${el1} y el ${el2}.`)
}

const informacion = {
    nombre: 'Emmanuel'
}

const musica = ['Rock','Metal']

persona.call(informacion, musica[0],musica[1])  //En el .call se debe pasar cada parametro individualmente
persona.apply(informacion, musica)              //En .apply se asigna automaticamente pasandole el array

//.bind te crea una funcion, que luego debes llamarla

const bind = persona.bind(informacion, musica[0],musica[1]) // los args son iguales a .call
bind()