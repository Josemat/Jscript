//Namespaces
//Es un design pattern para la organizacion de codigo
// Ayuda a evitar colision con nombres en el scope global de js

 const restaurantApp = {};

 restaurantApp.platillos = [
     {
         platillo: 'pizza',
         precio: 30
     },
     {
        platillo: 'hamburguesa',
        precio: 20
    },
    {
        platillo: 'pizza',
        precio: 15
    },
 ]


 restaurantApp.funciones = {
     mostrarMenu: platillos =>{
         console.log(`Bienvenidos a nuestro menu`)

         platillos.forEach((platillo, index) => {
             console.log(`${index} : ${platillo.platillo} $${platillo.precio}`)
             
         });
     },
     ordenarPlatillo: id =>{
         console.log(`Tu platillo ${restaurantApp.platillos[id].platillo} está siendo preparado`)
     },
     agregarPlatillo: (nombre, precio)=>{
         const nuevo = {
            platillo: nombre,
            precio: precio
         }
         restaurantApp.platillos.push(nuevo)

     }
 }
 const {platillos} = restaurantApp

 restaurantApp.funciones.mostrarMenu(platillos);
 restaurantApp.funciones.ordenarPlatillo(0)
 restaurantApp.funciones.agregarPlatillo('Choripan',150)
 restaurantApp.funciones.mostrarMenu(platillos);

 