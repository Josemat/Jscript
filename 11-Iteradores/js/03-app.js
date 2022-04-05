//FIZZBUZZ
//iterar del 1 al 50
//si es multiplo de 3 FIZZ
//si es multiplo de 5 BUZZ
//Ambos FizzBuzz

let nombre = "";
for(let i=1;i<=50;i++){
    nombre=""
    if(i%3===0){
        nombre = "Fizz";
    }
    if(i%5===0){
        nombre += "Buzz"
    }
    if(nombre!=""){console.log(`${nombre}`)
    }else{
        console.log(i)
    }    
}