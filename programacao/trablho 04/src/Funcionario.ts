export class Funcionario {

    private Nome: string;
    private Salario: number;
    private CPF: string;

    constructor(Nome: string, Salario: number, CPF: string) {
        this.Nome = Nome;
        this.Salario = Salario;
        this.CPF = CPF;
    }

    getNome() {
        return this.Nome;
    }

    getSalario() {
        return this.Salario;
    }

    getCPF() {
        return this.CPF;
    }

    setNome(Nome: string): void {
        this.Nome = Nome;
    }

    setSalario(Salario: number): void {
        this.Salario = Salario;
    }

    setCPF(CPF: string): void {
        if (CPF.length <= 11) {
            this.CPF = CPF;
        }
    }
}