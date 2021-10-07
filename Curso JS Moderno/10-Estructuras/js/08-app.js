// Si queremos poner varios IF en lugar de else if es recomendable hacerlo sobre una funcnion

//Example
const puntuacion = 500;

function puntaje(){
    if(puntuacion>400){
        console.log("Excelente!")
        return;//Con este return te aseguras que deje de ejecutarse la funcion
    }
    if(puntuacion >300){
        consolel.log('Muy buen puntaje!')
    }
}
puntaje();