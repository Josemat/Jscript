// document.querySelector('DOMContentLoaded', cargado())
    
// function cargado(){
    
//     const observer = new IntersectionObserver(entries =>{
//         console.log(entries[0].isIntersecting)
//     })

//     observer.observe(document.querySelector('.premium'))
// }



document.addEventListener('DOMContentLoaded',()=>{
    const observer = new IntersectionObserver((entries)=>{
        console.log(entries[0]) // este valor entrega una mayor cantidad de datos
        console.log(entries[0].isIntersecting) //Con este valor puedo sacar el boolean en cuestion
    
    })
    observer.observe(document.querySelector('.premium'))//El elemento que queremos que sea observado
    
})