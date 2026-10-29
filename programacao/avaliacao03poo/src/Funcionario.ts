export class Funcionario {
    private nome: string;
    private idade: number;
    private salario: number;

    constructor(nome: string, idade: number, salario: number) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }

    // Getters
    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }

    getSalario(): number {
        return this.salario;
    }

    // Setters
    setNome(nome: string): void {
        this.nome = nome;
    }

    setIdade(idade: number): void {
        this.idade = idade;
    }

    setSalario(salario: number): void {
        this.salario = salario;
    }

    // Método para exibir os dados
    exibirDados(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Salário: R$ ${this.salario}`);
    }

    // Método para aumentar o salário
    aumentarSalario(percentual: number): void {
        this.salario = this.salario + (this.salario * percentual / 100);
    }
}