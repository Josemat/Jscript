import Citas from "../js/classes/Citas";

describe('Probar la clase de ciras',()=>{
    const citas = new Citas();
    test('Agregar una nueva cita',()=>{

        const citaObj = {
            mascota: 'karen',
            propietario: 'Agus',
            telefono: '10982309',
            fecha: '11-11-21',
            hora:'10:30',
            sintomas: 'duerme'
        }
        citaObj.id = Date.now();
        citas.agregarCita(citaObj)

        //Acá escribir la prueba
        expect(citas).toMatchSnapshot();
    })
});