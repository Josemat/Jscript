function sumar(a,b){//a y b son parametros
    console.log(a + b);

}
sumar(2,3);//son argumentos

function saludar (nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}!`)
}
saludar('jose','Tulian')
saludar('jose') //si le pasamos un valor el segundo lo tira como undefined
saludar()//si no le pasamos ninguno tira 2 valores undefined
