import { FormaGeometrica } from "./FormaGeometrica.js";
import { ICalculo } from "./ICalculo.js";
export declare class Retangulo extends FormaGeometrica implements ICalculo {
    private base;
    private altura;
    constructor(nome: string, base: number, altura: number);
    calcularArea(): number;
}
//# sourceMappingURL=Retangulo.d.ts.map