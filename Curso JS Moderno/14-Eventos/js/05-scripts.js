window.addEventListener('scroll', ()=>{ //Ventana Global
    // const enYy = window.scrollY //va a almacenar los pixeles scrolleados en Y
    // const enEquis = window.scrollX
    // console.log(enYy, enEquis)

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //Con getbound... tira datos de cuanto falta en px para la posicion del elemento
    console.log(ubicacion)
    if(ubicacion.top < -200 ){
        console.log('Te pasaste ameo')
    }else if(ubicacion.top < 600){
        console.log('Llegaste ameo')
    }else{
        console.log('te Falta ameo')
    }
})