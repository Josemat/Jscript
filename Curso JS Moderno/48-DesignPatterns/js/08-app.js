//MEdiador o intermediario
// Define objetos ya localizados para objetivos especificos

function Vendedor(nombre){
this.nombre=nombre
this.sala = null
}
Vendedor.prototype = {
    oferta: (articulo, precio)=>{
        console.log(`Tenemos el siguiente artiiculo: ${articulo}, iniciamos con un precio de $${precio}`)
    },
    vendido: comprador =>{
        console.log(`Vendido a ${comprador}`)
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
}
Comprador.prototype = {
    oferta: (cantidad, comprador)=>{
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}

function Subasta(){
    let compradores = {};
    return{
        registrar: usuario =>{
            compradores[usuario.nombre] = usuario;
            usuario.sala = this
        }
    }

}


//Crear objetos

const juan = new Comprador('juan')
const pablo = new Comprador('pablo')
const vendedor = new Vendedor('vendedor')
const subasta = new Subasta()

//Tienes que registrarlos

subasta.registrar(juan)
subasta.registrar(pablo)
subasta.registrar(vendedor)

vendedor.oferta('Mustang 66', 300)
juan.oferta(300, juan)
pablo.oferta(400, pablo)
vendedor.vendido('Pablo')