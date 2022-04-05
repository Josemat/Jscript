const salida = document.querySelector('#salida')
const microfono = document.querySelector('#microfono')

microfono.addEventListener('click',ejecutarSpeechAPI)

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
//Etapas de recognition
//Arrancar/ comenzar a escuchar/ cuando termina de hablar el usuario/ mostrar los resultados
    recognition.start()

    recognition.onstart = function(){ //Cuando empiece a ejecutarse
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando'
    };

    recognition.onspeechend = function(){
        salida.textContent = 'Se dejo de grabar...'
        recognition.stop();
    }

    recognition.onresult = function(e){
        console.log(e.results[0][0].transcript) //Esta linea muestra el resultado escrito
        console.log(~~(e.results[0][0].confidence*100)) //Y este muestra la certeza del mismo

        const {transcript, confidence} = e.results[0][0]
        const div1 = document.createElement('p')
        div1.textContent = transcript
        salida.appendChild(div1)
        const div2 = document.createElement('p')
        div2.textContent = Number(~~(confidence*100)) + '%'
        salida.appendChild(div2)
    }
}