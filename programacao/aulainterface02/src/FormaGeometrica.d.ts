import { ICalculo } from "./ICalculo.js";
export declare abstract class FormaGeometrica implements ICalculo {
    nome: string;
    constructor(nome: string);
    getNome(): string;
    setNome(nome: string): void;
    abstract calcularArea(): number;
}
//# sourceMappingURL=FormaGeometrica.d.ts.map