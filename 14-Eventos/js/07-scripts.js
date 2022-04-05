
//Event bubbling con delegation
const cardDiv   =   document.querySelector('.card')
cardDiv.addEventListener('click', (e)=>{
    // console.log('Hiciste click en card', e.target)
    if(e.target.classList.contains('titulo')){
        console.log('titulo')
    }
    if(e.target.classList.contains('info')){
        console.log('Hiciste click en info')
    }
    if(e.target.classList.contains('precio')){
        console.log('Hiciste click en precio')
    }
})