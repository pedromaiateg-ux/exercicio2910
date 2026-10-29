import { FormaGeometrica } from "./FormaGeometrica.js";
export class Circulo extends FormaGeometrica {
    raio;
    constructor(nome, raio) {
        super(nome);
        this.raio = raio;
    }
    getRaio() {
        return this.raio;
    }
    setRaio(raio) {
        this.raio = raio;
    }
    //polimorfismo
    calcularArea() {
        return Math.PI * (this.raio ** 2);
    }
}
//# sourceMappingURL=Circulo.js.map