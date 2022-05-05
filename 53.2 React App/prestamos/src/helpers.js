
export function calcularTotal(monto, plazo){
    // Cantidades:
        // 0-1000 = 25%
        // 1001-5000 = 20%
        // 5001-10000 = 15%
        // +10000 = 10%
    let totalCantidad;
    
    if(monto <= 1000){
        totalCantidad = monto * .25;
    }else if( monto >=1001 && monto <= 5000){
        totalCantidad = monto * .20
    }else if(monto >= 5001 && monto <= 10000){
        totalCantidad = monto * .15
    }else if(monto >= 10000){
        totalCantidad = monto * .1
    }
    // Calcular plazo
    let totalPlazo=0;

    switch (plazo) {
        case 3:
            totalPlazo = monto * .05;
            break;
        case 6:
            totalPlazo = monto * .1;
            break;
        case 12:
            totalPlazo = monto * .15;
            break;
        case 24:
            totalPlazo = monto * .2;
            break;
    
        default:
            break;
    }
    
    return totalCantidad + totalPlazo + monto
}