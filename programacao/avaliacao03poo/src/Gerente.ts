import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
    private departamento: string;

    constructor(
        nome: string,
        idade: number,
        salario: number,
        departamento: string
    ) {
        super(nome, idade, salario);
        this.departamento = departamento;
    }

    getDepartamento(): string {
        return this.departamento;
    }

    setDepartamento(departamento: string): void {
        this.departamento = departamento;
    }

    // Sobrescrevendo o método da classe Funcionario
    exibirDados(): void {
        console.log("--- GERENTE ---");
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Salário: R$ ${this.getSalario()}`);
        console.log(`Departamento: ${this.departamento}`);
    }
}