class Cliente2{ //Crear getters and setters
    #nombre

    setNombre(nombre){
        this.#nombre = nombre
    }
    getNombre(){
        return this.#nombre
    }
}

const juan2 = new Cliente2()
juan2.setNombre('pedro')
console.log(juan2.getNombre())