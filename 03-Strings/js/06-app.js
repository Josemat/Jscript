const producto = 'Monitor 20 pulgadas';

// .repeat te va a permitir repetir una string

const texto = ' en Promocion' .repeat(3);
console.log(` ${producto} ${texto} !!!`) //DATO!!!
//Si le ponemos a repetir con decimales este mismo va a redondear o truncarlo, es decir, le saca el decimal


// Split para dividir una string
const actividad = "estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" ")); //va a separar todo en los espacios

const hobbies="Leer, cantar, caminar, escuchar musica, pescar";
console.log(hobbies.split(",").trim());
