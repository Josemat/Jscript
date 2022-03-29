// New binding, a este ya lo estuvimos aplicando cuando estabamos viendo constructores

function Auto(modelo, color){
    this.modelo = modelo; //Acá se esta aplicando el new binding, con el .this
    this.color = color;

}

const auto = new Auto('Peugeot','Azul')
console.log(auto)


function asd (){
    console.log(color)
}

// asd() //Si la llamamos en esta ocasión  nos va a decir que la variable no esta definida, luego va a buscar en la ventana global(window) y va a encontrarla, por lo cual la va a asignar.


window.color = 'negro';
asd()   