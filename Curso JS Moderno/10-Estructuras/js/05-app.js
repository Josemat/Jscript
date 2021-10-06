//Switch case

const metodoPago = 'tarjeta';

switch(metodoPago){//Aca se da la variable a comparar
    case 'efectivo'://aca se compara, equivalente a un else if
        console.log(`Seleccionaste el metodo de pago ${metodoPago}`)
        break;//Siempre terminar un case con un break
    case 'tarjeta':
        console.log('Seleccionaste metodo de pago tarjeta')
        break
    default://el default viene a ser un else, donde si no se cumple ninguna funcion cae acá
        console.log('Esto vendria a ser un else');
        break;
}
