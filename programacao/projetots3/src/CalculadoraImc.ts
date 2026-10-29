export class CalculadoraImc{
    private peso: number;
    private altura: number;

    constructor(peso: number, altura: number){
        this.peso = peso;
        this.altura = altura;
    }
    //metodo com calculo de IMC
    public calcular(): number{
        return this.peso / (this.altura * this.altura)
    }
    public classificar():string{
        const imc = this.calcular()
        if(imc < 18.5){
            return "abaixo do peso"
        }else if(imc < 25){
            return "peso normal"
        }else if(imc < 30){
            return "sobrepeso"
        }else{
            return "obesidade"
        }
    }
}