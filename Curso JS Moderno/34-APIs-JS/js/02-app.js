// document.querySelector('DOMContentLoaded', cargado())
    
// function cargado(){
    
//     const observer = new IntersectionObserver(entries =>{
//         console.log(entries[0].isIntersecting)
//     })

//     observer.observe(document.querySelector('.premium'))
// }



document.addEventListener('DOMContentLoaded',()=>{
    const observer = new IntersectionObserver((entries)=>{console.log(entries[0])})
    observer.observe(document.querySelector('.premium'))
})