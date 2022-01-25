const notificar = document.querySelector('#notificar')
notificar.addEventListener('click',()=>{
    Notification
        .requestPermission()
        .then(resultado=>console.log(resultado))
})

const verNotificacion = document.querySelector('#verNotificacion')
    verNotificacion.addEventListener('click', ()=>{
        if(Notification.permission === 'granted'){
            const notificacion = new Notification('Esta es la notificacion',{
                icon: 'img/ccj.png',
                body: 'Cuerpo de la notif'
            })
            notificacion.onclick = function(){
                window.open('www.google.com')
            }
        }
    })