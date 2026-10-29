import { FormaGeometrica } from "./FormaGeometrica.js";
export class Retangulo extends FormaGeometrica {
    base;
    altura;
    constructor(nome, base, altura) {
        super(nome);
        this.base = base;
        this.altura = altura;
    }
    //get set 
    calcularArea() {
        return this.base * this.altura;
    }
}
//# sourceMappingURL=Retangulo.js.map