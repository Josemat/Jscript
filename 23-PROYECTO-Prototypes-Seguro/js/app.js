//Constructores

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function(){
/*
americano = 1.15
asiatico  = 1.05
europeo = 1.35
*/
let cantidad;
const valorBase = 2000;


switch (this.marca) {
    case "1":
        cantidad = valorBase* 1.15;
        break;
    case '2':
        cantidad = valorBase * 1.05;
        break
    case '3':
        cantidad = valorBase * 1.35;
        break;
    default:
        break;
        
}


//Aca vamos a hacer que suba un 3% por cada año
const porcentaje = 0.03;
const diferenciaDeAnios = new Date().getFullYear() - this.year
cantidad = (1-(porcentaje*diferenciaDeAnios))*cantidad;


if(this.tipo === 'basico'){
    cantidad = cantidad* 1.30

}else if(this.tipo === "completo"){
    cantidad = cantidad* 1.5
}
return cantidad
}

function UI(){};

//Llena las opciones de los años
UI.prototype.llenarOpciones = ()=>{
    const max = new Date().getFullYear(); //Siempre controlar el Date().getFullYear(); bien completo, CON PARENTESIS
    const min = max - 20;
    const selectYear = document.querySelector('#year')
    for(i=max; i > min ; i--){
        const option = document.createElement('option')
        option.textContent = i;
        option.value = i;
        selectYear.appendChild(option);
        }    
}

//Muestra alertas en pantalla
UI.prototype.mostrarAlerta = (mensaje, tipo)=>{
    
    const div = document.createElement('div');
    div.textContent= "";
    
    if(tipo === "error"){  
        div.classList.add(tipo, "mt-10");

    }else{
        div.classList.add(tipo, "mt-10")
        
    }
    div.textContent = mensaje
    const form = document.querySelector("#cotizar-seguro");
    form.insertBefore(div, document.querySelector("#resultado"));
    setTimeout(()=>{
        div.remove();
    },2000)
}

UI.prototype.mostrarValores = (total, seguro)=>{
    const {marca,year,tipo} = seguro
    const div = document.createElement('div');
    div.classList.add('mt-10')
    
    let marcaString = "";
    switch (marca) {
        case '1':
            marcaString = "Americano";
            break;
        case '2':
            marcaString = "Asiatico";
            break;
        case '3':
            marcaString = "Europeo";
            break;
    
        default:
            break;
    }

    div.innerHTML=`
    <p class="header">Tu resumen</p>
    <p class="font-bold">El seguro va a costar: <span class="font-medium">$${total}</span></p>
    <p class="font-bold">El año del vehiculo es ${year} </p>
    <p class="font-bold">El vehiculo es ${marcaString} </p>
    <p class="font-bold">El tipo de seguro es ${tipo} </p>
    
    `;
    const form = document.querySelector("#resultado");
    const spinner = document.querySelector('#cargando')
    spinner.style.display = 'block';
    setTimeout(()=>{
        spinner.style.display= 'none'
       form.appendChild(div)
    },2000)
}

//Instanciar UI
const ui = new UI();    


document.addEventListener("DOMContentLoaded",()=>{
    ui.llenarOpciones()
    

    })
    validarFormulario()

function validarFormulario(){
    
    const submit = document.querySelector('#cotizar-seguro')
    submit.addEventListener('submit', (e)=>{
        e.preventDefault();
        const valorMarca = document.querySelector('#marca').value
        const valorYear = document.querySelector('#year').value
        const valorTipo = document.querySelector('input[name="tipo"]:checked').value
        if(valorMarca === '' || valorYear === '' || valorTipo ===''){
                ui.mostrarAlerta("Todos los campos son obligatorios...", "error");
                return //Esto genera que se detenga la ejecucion
        }else{
            ui.mostrarAlerta("Validando...", "correcto");
        }
//Instanciar el seguro
      const seguro = new Seguro(valorMarca, valorYear, valorTipo)
      const total =  seguro.cotizarSeguro();
      

      //Borrar el resultado previo
      const resultadoP = document.querySelector('#resultado div')
        if(resultadoP){resultadoP.remove()}

//utilizar el prototype que vamos a utilizar para la interfaz
        ui.mostrarValores(total, seguro)

      
    })}