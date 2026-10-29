import { Funcionario } from "./Funcionario.ts"

export class Desenvolvedor extends Funcionario {

    linguagem: string

    constructor(nome: string, idade: number, salario: number, linguagem: string) {
        super(nome, idade, salario)
        this.linguagem = linguagem
    }

    exibirDados() {
        console.log("--- DESENVOLVEDOR ---")
        console.log("Nome: " + this.getNome())
        console.log("Idade: " + this.getIdade())
        console.log("Salário: R$ " + this.getSalario())
        console.log("Linguagem: " + this.linguagem)
    }
}