import { FormaGeometrica } from "./FormaGeometrica.js";
import { ICalculo } from "./ICalculo.js";

export class Retangulo extends FormaGeometrica implements ICalculo{
    private base: number;
    private altura: number;
    constructor(nome: string,base: number, altura:number){
        super(nome)
        this.base = base;
        this.altura = altura;
    }
    //get set 
    public calcularArea(): number {
        return this.base * this.altura;
    }
}