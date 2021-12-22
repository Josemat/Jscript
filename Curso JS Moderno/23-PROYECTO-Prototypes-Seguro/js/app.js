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
console.log(this.tipo)
console.log(this.marca)
console.log(this.year)
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
      seguro.cotizarSeguro()
//

      
    })}