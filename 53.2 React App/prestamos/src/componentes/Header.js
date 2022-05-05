import React from 'react';

// function Header ({titulo}){ //Destructuring aplicado
    
//     return(

//         <h1>{titulo}</h1>
//     )
    
// }
//Otra forma de escribir las funciones es:
const Header = ({titulo})=>(
    <h1>{titulo}</h1> //El return está implicito, PERO de esta manera no se puede escribir codigo, solo retornar
)
export default Header;