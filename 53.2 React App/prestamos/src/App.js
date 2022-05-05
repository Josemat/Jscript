import React, {Fragment, useState} from 'react';
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Mensaje from "./componentes/Mensaje";
import Resultado from "./componentes/Resultado";
import Spinner from './componentes/Spinner';


function App() {
  let componente;
    //Definir state
    //la estructura es la siguiente
    //const [valor, funciónQuePasaParametro] = usarFuncionalidad
    const [cantidad, guardarCantidad] = useState(0) 
    const [meses, guardarMeses] = useState('')
    const [total, guardarTotal] = useState(0)
    const [cargando, guardarCargando] = useState(false)
    if(cargando){
        componente = <Spinner />
    }else if(total === 0 ){
      componente = <Mensaje />
    }else{
      componente = <Resultado 
                cantidad = {cantidad}
                meses = {meses}
                total = {total}
        />
    }

  return (
      <Fragment>
        <Header
        titulo="Cotizador de préstamos"
        />
        <div className='container'>
          <Formulario 
          cantidad = {cantidad}
          guardarCantidad = {guardarCantidad}
          meses = {meses}
          guardarMeses = {guardarMeses}
          guardarTotal = {guardarTotal}
          guardarCargando = {guardarCargando}
          />
        <div className='mensajes'>
        {componente}
        </div>
        </div>
      </Fragment>
        
      
  );
}

export default App;
