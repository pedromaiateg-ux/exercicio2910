export class CalculadoraImc {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    //metodo com calculo de IMC
    calcular() {
        return this.peso / (this.altura * this.altura);
    }
    classificar() {
        const imc = this.calcular();
        if (imc < 18.5) {
            return "abaixo do peso";
        }
        else if (imc < 25) {
            return "peso normal";
        }
        else if (imc < 30) {
            return "sobrepeso";
        }
        else {
            return "obesidade";
        }
    }
}
//# sourceMappingURL=CalculadoraImc.js.map