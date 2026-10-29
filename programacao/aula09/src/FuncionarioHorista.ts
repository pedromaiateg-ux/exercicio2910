import { Funcionario } from "./Funcionario";

export class FuncionarioHorista extends Funcionario {

    private horasTrabalhadas: number;
    private valorHora: number;

    constructor(
        nome: string,
        cpf: string,
        salarioBase: number,
        horasTrabalhadas: number,
        valorHora: number
    ) {

        super(nome, cpf, salarioBase);

        this.horasTrabalhadas = horasTrabalhadas;
        this.valorHora = valorHora;
    }

    // GET
    public getHorasTrabalhadas(): number {
        return this.horasTrabalhadas;
    }

    // SET
    public setHorasTrabalhadas(horas: number): void {
        this.horasTrabalhadas = horas;
    }

    // GET
    public getValorHora(): number {
        return this.valorHora;
    }

    // SET
    public setValorHora(valor: number): void {
        this.valorHora = valor;
    }

    // Método calculado
    public calcularSalario(): number {

        return this.horasTrabalhadas * this.valorHora;

    }
}

