import { Funcionario } from "./Funcionario";

export class Desenvolvedor extends Funcionario {
    private linguagem: string;

    constructor(
        nome: string,
        idade: number,
        salario: number,
        linguagem: string
    ) {
        super(nome, idade, salario);
        this.linguagem = linguagem;
    }

    getLinguagem(): string {
        return this.linguagem;
    }

    setLinguagem(linguagem: string): void {
        this.linguagem = linguagem;
    }

    // Sobrescrevendo o método da classe Funcionario
    exibirDados(): void {
        console.log("--- DESENVOLVEDOR ---");
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Salário: R$ ${this.getSalario()}`);
        console.log(`Linguagem: ${this.linguagem}`);
    }
}