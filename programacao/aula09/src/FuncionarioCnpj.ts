import { Funcionario } from "./Funcionario";

export class FuncionarioCnpj extends Funcionario {

    private HoraTrabalho: number;
    private Salario: number;

    constructor(
        nome: string,
        cpf: string,
        salarioBase: number,
        HoraTrabalho: number,
        Salario: number
    ) {
        super(nome, cpf, salarioBase);

        this.HoraTrabalho = HoraTrabalho;
        this.Salario = Salario;
    }

    // GET
    public getHoraTrabalho(): number {
        return this.HoraTrabalho;
    }

    public getSalario(): number {
        return this.Salario;
    }

    // SET
    public setHoraTrabalho(HoraTrabalho: number): void {
        this.HoraTrabalho = HoraTrabalho;
    }

    public setSalario(Salario: number): void {
        this.Salario = Salario;
    }

    // MÉTODO ABSTRATO
    public calcularSalario(): number {
        return 8 * this.HoraTrabalho;
    }
}