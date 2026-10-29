export class Funcionario {

    private nome: string
    private idade: number
    private salario: number

    constructor(nome: string, idade: number, salario: number) {
        this.nome = nome
        this.idade = idade
        this.salario = salario
    }

    exibirDados() {
        console.log("Nome: " + this.nome)
        console.log("Idade: " + this.idade)
        console.log("Salário: R$ " + this.salario)
    }

    getNome() {
        return this.nome
    }

    setNome(nome: string) {
        this.nome = nome
    }

    getIdade() {
        return this.idade
    }

    setIdade(idade: number) {
        this.idade = idade
    }

    getSalario() {
        return this.salario
    }

    setSalario(salario: number) {
        this.salario = salario
    }

    aumentarSalario(percentual: number) {
        this.salario = this.salario + (this.salario * percentual / 100)
    }
}