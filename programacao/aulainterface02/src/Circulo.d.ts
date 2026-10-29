import { FormaGeometrica } from "./FormaGeometrica.js";
import { ICalculo } from "./ICalculo.js";
export declare class Circulo extends FormaGeometrica implements ICalculo {
    private raio;
    constructor(nome: string, raio: number);
    getRaio(): number;
    setRaio(raio: number): void;
    calcularArea(): number;
}
//# sourceMappingURL=Circulo.d.ts.map