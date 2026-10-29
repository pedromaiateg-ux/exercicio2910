import { FormaGeometrica } from "./FormaGeometrica.js";
import { ICalculo } from "./ICalculo.js";

export class Circulo extends FormaGeometrica implements ICalculo{
    private raio:number;
    constructor(nome:string, raio:number){
        super(nome)
        this.raio = raio
    }
    public getRaio():number{
        return this.raio;
    }
    public setRaio(raio:number){
        this.raio = raio
    }
    //polimorfismo
    public calcularArea(): number {
    return Math.PI * (this.raio ** 2);
}
    }