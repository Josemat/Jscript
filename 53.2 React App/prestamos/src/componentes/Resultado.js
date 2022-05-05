import React from 'react';

const Resultado = ({cantidad,meses,total}) => {
    return(
    
    <div className='u-full-width resultado'>
        <h2>Resumen:</h2>
        <p>La cantidad solicitada es: ${cantidad}</p>
        <p>El plazo elegido es de {meses} meses</p>
        <p>La cuota mensual seria de $ {(total / meses).toFixed(2)} mensuales</p>
        <p>El total a devolver será de ${(total).toFixed(2)}</p>

    </div> 
   );
};

 
export default Resultado;