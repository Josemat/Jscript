import {nuevaCita,datosCita} from './funciones.js'
import {mascotaInput,propietarioInput,telefonoInput,fechaInput,horaInput,sintomasInput, formulario} from './selectores.js'
// Eventos
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);
    
}
formulario.addEventListener('submit', nuevaCita);