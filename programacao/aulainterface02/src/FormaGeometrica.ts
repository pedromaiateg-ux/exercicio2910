import { ICalculo } from "./ICalculo.js";

export abstract class FormaGeometrica implements ICalculo {

    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public abstract calcularArea(): number;
}