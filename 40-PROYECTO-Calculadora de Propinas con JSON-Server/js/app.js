let cliente = {
    mesa:'',
    hora:'',
    pedido:[]
};
let categorias = {
    1:"Comida",
    2:"Bebida",
    3:"Postre"
}

const btnGuardarCliente = document.querySelector('#guardar-cliente')
btnGuardarCliente.addEventListener('click', guardarCliente)

function guardarCliente(){
    const mesa = document.querySelector('#mesa').value
    const hora = document.querySelector('#hora').value
    /*
    if(!mesa || !hora){
        console.log('Hay al menos un campo vacio')
    }else{
        console.log('Todos los campos estan llenos')
    }
    */
//    Otra forma de validar los datos es:

    const camposVacios = [mesa, hora].some(element => element === '')
    if(camposVacios){
        const existeAlerta = document.querySelector('.invalid-feedback')
        if(!existeAlerta){
            const alerta = document.createElement('div')
            alerta.classList.add('invalid-feedback','d-block','text-center')
            alerta.textContent = 'Todos los campos son obligatorios'
    
            document.querySelector('.modal-body form').appendChild(alerta)
            setTimeout(() => {
                alerta.remove()
            }, 2000);
        }
        return

    }
    // Asignar datos del formulario a cliente
    cliente = {...cliente, mesa, hora} //Va en éste orden para que primero haga una copia del objeto y luego le agregue los valores de mesa y hora. Si primero le agregamos los valores de mesa y hora y luego la copia se pierden los valores asignados al comienzo ya que luego copia con un objeto vacio.
    

    
//  Ocultar modal bootstrap
    const modalFormulario   =   document.querySelector('#formulario')
    const modalBootstrap    =   bootstrap.Modal.getInstance(modalFormulario)
    modalBootstrap.hide()
    
    mostrarSecciones()
    obtenerPlatillos(

    )
}

function obtenerPlatillos(){
    const url = "http://localhost:4000/platillos"
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado=>imprimirPlatillos(resultado))
        .catch(error=>console.error(error))
}
function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none')  //Seleccionamos las 2 secciones ocultas con d-none
    seccionesOcultas.forEach(element=>element.classList.remove('d-none'))
}
function imprimirPlatillos(platillos){
    
    const contenido = document.querySelector('#platillos .contenido')
    platillos.forEach(platillo=>{
        const {id, nombre, precio, categoria} = platillo
        const row = document.createElement('div')
        row.classList.add('row','py-3','border-top');

        const nomb = document.createElement('div')
        nomb.classList.add('col-md-4')
        nomb.textContent = nombre

        const divPrecio = document.createElement('div')
        divPrecio.classList.add('col-md-3','fw-bold')
        divPrecio.textContent = `$${precio}`

        const divCategoria = document.createElement('div')
        divCategoria.classList.add('col-md-3')
        divCategoria.textContent = categorias[categoria] //Usamos un objeto con categorias para asignar los valores(id)


        // Creamos un input para ir agregando platillos
        const inputCantidad = document.createElement('input')
        inputCantidad.type = 'number'
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.classList.add('form-control');
        inputCantidad.id = `producto-${id}`

        // Creamos el div en el cual va a ir el input
        const agregar = document.createElement('div')
        agregar.classList.add('col-md-2')
        agregar.appendChild(inputCantidad)
        
        //Funcion que detecta la cantidad y el platillo que se esta agregando
        //inputCantidad.onchange = agregarPlatillo(id) //Si le agregamos el parentesis con el parametro estamos mandando a llamar a la funcion, y si lo dejamos sin parentesis hace lo que queremos pero sin capacidad de que nos diga el id. Por lo tanto se tiene que hacer de la siguiente manera:
        inputCantidad.onchange = function(){
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...platillo, cantidad}) //Con el spread operator pasamos una copia del elemento asi suma las cantidades. y lo pasamos convertido en objeto
        }

        row.appendChild(nomb)
        row.appendChild(divPrecio)
        row.appendChild(divCategoria)
        row.appendChild(agregar)
        contenido.appendChild(row )
    }) 
}

function agregarPlatillo(producto){
    // Extraer el pedido actual 
    let {pedido} = cliente

    // Revisar que la cantidad sea mayor a 0
    if(producto.cantidad > 0){ //Se puede ignorar el ">0" | si la cantidad es mayor a 0 habria que ir actualizando el array de pedido
        if(pedido.some(articulo=>articulo.id === producto.id)){ //Si el id se encuentra entra en el if
            const pedidoActualizado = pedido.map(articulo => {
                if(articulo.id === producto.id){ //Iteramos sobre el array de pedido controlando si el id es igual
                    articulo.cantidad = producto.cantidad //En caso de ser igual se actualiza el valor de cantidad
                }
                return articulo//Se hace retorno fuera del if y si o si ya que si no da undefined
            });
            //Se asigna el nuevo    array a cliente.pedido
            cliente.pedido = [...pedidoActualizado]
        }else{
            // Si el pedido id no se encuentra se agrega al array de pedidos
            cliente.pedido = [...pedido, producto]
        }
        
    }else{
        // Eliminar elementos cuando la cantidad es 0
        const resultado = pedido.filter(articulo=>articulo.id !== producto.id) //El filter nos pasa los DIFERENTES (!==) al que esta ingresando por el parametro "producto"
        cliente.pedido = [...resultado]

    }
    // Limpiar HTML
    limpiarHTML()
    
    if(cliente.pedido.length){
        //Mostrar el resumen
        actualizarResumen();
    }else{
        mensajePedidoVacio()
    }
}
function actualizarResumen(){
    //Vamos a seleccionar donde va a ir nuestro contenido
    // Eliminamos "añade los elementos del pedido"
    const contenido =  document.querySelector('#resumen .contenido')

    const resumen = document.createElement('div')
    resumen.classList.add('col-md-6','card','py-2','px-3','shadow');

    const mesa = document.createElement('p')
    mesa.textContent = 'Mesa: '
    mesa.classList.add('fw-bold')
    const mesaSpan = document.createElement('span')
    mesaSpan.textContent = cliente.mesa
    mesaSpan.classList.add('fw-normal')

    const hora = document.createElement('p')
    hora.textContent = 'Hora: '
    hora.classList.add('fw-bold')
    const horaSpan = document.createElement('span')
    horaSpan.textContent = cliente.hora
    horaSpan.classList.add('fw-normal')

// Agregar los elementos al padre
    mesa.appendChild(mesaSpan)
    hora.appendChild(horaSpan)
// Titulo de la seccion
    const heading = document.createElement('h3')
    heading.textContent = "Platillos consumidos"
    heading.classList.add('my-4','text-center')

// Iterar sobre el array de pedidos
    const grupo = document.createElement('ul')
    grupo.classList.add('list-group');
    const {pedido} = cliente;
    pedido.forEach(articulo=>{
        const {nombre, cantidad,precio, id} = articulo;
        const lista = document.createElement('li');
        lista.classList.add('list-group-item');

        //Nombre del articulo
        const nombreEl = document.createElement('h4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent = nombre;

        //Cantidad del articulo
        const cantidadEL = document.createElement('p');
        cantidadEL.classList.add('fw-bold')
        cantidadEL.textContent = 'Cantidad: ';

        //Cantidad del articulo en variable
        const cantidadValor = document.createElement('span');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad

        //Precio del articulo
        const precioEL = document.createElement('p');
        precioEL.classList.add('fw-bold')
        precioEL.textContent = 'Precio: ';

        //Cantidad del articulo en variable
        const precioValor = document.createElement('span');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$${precio}`

        //Subtotal del articulo
        const subtotalEL = document.createElement('p');
        subtotalEL.classList.add('fw-bold')
        subtotalEL.textContent = 'Subtotal: ';

        //Cantidad del articulo en variable
        const subtotalValor = document.createElement('span');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(precio,cantidad)


        //Agregar boton eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn','btn-danger');
        btnEliminar.textContent = 'Eliminar pedido';

        // Funcion para eliminar del pedido
        btnEliminar.onclick = function(){
            eliminarProducto(id)
        }


        //Agregar valores a sus contenedores
        cantidadEL.appendChild(cantidadValor)
        precioEL.appendChild(precioValor)
        subtotalEL.appendChild(subtotalValor)



        //Agregar elementos al <li>
        lista.appendChild(nombreEl)
        lista.appendChild(cantidadEL)
        lista.appendChild(precioEL)
        lista.appendChild(subtotalEL)
        lista.appendChild(btnEliminar)

        // Agregar lista al grupo principal
        grupo.appendChild(lista)
    })
    
    
    // Agregar al contenido
    resumen.appendChild(heading)
    resumen.appendChild(mesa)
    resumen.appendChild(hora)
    resumen.appendChild(grupo)

    contenido.appendChild(resumen)

    //Mostrar formulario de propinas
    formularioPropinas()
}

function limpiarHTML(){
    const contenido = document.querySelector('#resumen .contenido')
    while(contenido.firstChild){ 
        contenido.removeChild(contenido.firstChild)
    }
}

function calcularSubtotal(precio,cantidad){
    return `$ ${precio * cantidad}`
}

function eliminarProducto(id){
    let {pedido} = cliente;
    const resultado = pedido.filter(articulo=>articulo.id !== id)
    cliente.pedido = [...resultado]

    // Limpiar HTML
    limpiarHTML()

    if(cliente.pedido.length){
        //Mostrar el resumen
        actualizarResumen();
    }else{
        mensajePedidoVacio()
    }

    // Poner el value en 0 del formulario

    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;
    

}

function mensajePedidoVacio(){
    const contenido = document.querySelector('#resumen .contenido');
    const texto = document.createElement('p');
    texto.classList.add('text-center')
    texto.textContent = "Añade los elementos del pedido";

    contenido.appendChild(texto)

}

function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');
    const formulario = document.createElement('div');
    formulario.classList.add('col-md-6','formulario');
    const divFormulario = document.createElement('div')
    divFormulario.classList.add('card','py-2','px-3','shadow')
    const heading = document.createElement('h3');
    heading.classList.add('my-4','text-center');
    heading.textContent = 'Propina';
    // Radio Button 10%
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = 10;    
    radio10.classList.add('form-check-input');
    radio10.onclick=function(){calcularPropina(radio10.value)}

    const radio10Label = document.createElement('label');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('div');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10)
    radio10Div.appendChild(radio10Label)

    // Radio Button 25%
    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = 25;    
    radio25.classList.add('form-check-input');
    radio25.onclick=function(){calcularPropina(radio25.value)}

    const radio25Label = document.createElement('label');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('div');
    radio25Div.classList.add('form-check');

    radio25Div.appendChild(radio25)
    radio25Div.appendChild(radio25Label)

    // Radio Button 50%
    const radio50 = document.createElement('input');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = 50;    
    radio50.classList.add('form-check-input');
    radio50.onclick=function(){calcularPropina(radio50.value)}

    const radio50Label = document.createElement('label');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label');

    const radio50Div = document.createElement('div');
    radio50Div.classList.add('form-check');

    radio50Div.appendChild(radio50)
    radio50Div.appendChild(radio50Label)

    //Agregar al div principal
    divFormulario.appendChild(heading)
    divFormulario.appendChild(radio10Div)
    divFormulario.appendChild(radio25Div)
    divFormulario.appendChild(radio50Div)

    // Agregar al formulario 
    formulario.appendChild(divFormulario)
    
    contenido.appendChild(formulario)
}

function calcularPropina(porc){
    const {pedido} =cliente;
    let subtotal = 0

    //Calcular el subtotal a pagar
    pedido.forEach(articulo=>{

        subtotal += articulo.cantidad * articulo.precio
    })

    //Seleccionar el radio button con la propina del cliente
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value


    //Calcular la propina
    const propina = ((subtotal*parseInt(propinaSeleccionada))/100);


    //Calcular el total a pagar

    const total = subtotal + propina;


    mostrarTotalHTML(subtotal,total,propina);


}

function mostrarTotalHTML(subtotal,total, propina){

    const divTotales = document.createElement('p');
    divTotales.classList.add('total-pagar')
    // Subtotal
    const subtotalParrafo = document.createElement('p');
    subtotalParrafo.classList.add('fs-4','fw-bold','mt-2');
    subtotalParrafo.textContent = 'Subtotal consumido: ';
    
    const subtotalSpan = document.createElement('span');
    subtotalSpan.classList.add('fw-normal')
    subtotalSpan.textContent = `$${subtotal}`

    // Propina
    const propinaParrafo = document.createElement('p');
    propinaParrafo.classList.add('fs-4','fw-bold','mt-2');
    propinaParrafo.textContent = 'Propina: ';
    
    const propinaSpan = document.createElement('span');
    propinaSpan.classList.add('fw-normal')
    propinaSpan.textContent = `$${propina}`

    // Total
    const totalParrafo = document.createElement('p');
    totalParrafo.classList.add('fs-4','fw-bold','mt-2');
    totalParrafo.textContent = 'Total a pagar: ';
    
    const totalSpan = document.createElement('span');
    totalSpan.classList.add('fw-normal')
    totalSpan.textContent = `$${total}`

    subtotalParrafo.appendChild(subtotalSpan)
    propinaParrafo.appendChild(propinaSpan)
    totalParrafo.appendChild(totalSpan)

    // Eliminar el ultimo resultado
    const totalPagarDiv = document.querySelector('.total-pagar')
    if(totalPagarDiv){
        totalPagarDiv.remove()
    }

    divTotales.appendChild(subtotalParrafo)
    divTotales.appendChild(propinaParrafo)
    divTotales.appendChild(totalParrafo)

    const formulario = document.querySelector('.formulario > div ');
    formulario.appendChild(divTotales)

}