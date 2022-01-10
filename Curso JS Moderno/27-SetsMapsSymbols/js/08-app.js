// Iteradores  "Nuevos" EC7-8

const ciudades = ['londres','New york','Paris']
const ordenes = new Set([132,123 , 564, 987])
const datos = new Map()

datos.set('Nombre', 'Emma')
datos.set('Profesion', 'gilaso')


// Entries/entry
// Éste nos va a agregar llave en caso de que no exista y nos va a retornar llave y valor
for(let entry of ciudades.entries()){
    console.log(entry)
    //Expected output:
    // (2) [0, 'londres']
    // (2) [1, 'New york']
    // (2) [2, 'Paris']
}