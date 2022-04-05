//Para heredar una clase
import {Cliente} from './cliente.js'


export class Empresa extends Cliente{
    constructor(nombre, saldo, categoria){
        super(nombre, saldo)
        this.categoria = categoria
    }
    mostrarInformacion(){
        return `Cliente ${this.nombre} - Saldo: $${this.saldo} - Categoria: ${this.categoria}`
    }
}