import { Funcionario } from "./Funcionario.ts"

export class Gerente extends Funcionario {

    departamento: string

    constructor(nome: string, idade: number, salario: number, departamento: string) {
        super(nome, idade, salario)
        this.departamento = departamento
    }

    exibirDados() {
        console.log("--- GERENTE ---")
        console.log("Nome: " + this.getNome())
        console.log("Idade: " + this.getIdade())
        console.log("Salário: R$ " + this.getSalario())
        console.log("Departamento: " + this.departamento)
    }
}