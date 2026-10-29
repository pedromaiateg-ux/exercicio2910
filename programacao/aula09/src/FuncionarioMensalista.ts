import { Funcionario } from "./Funcionario";

export class FuncionarioMensalista extends Funcionario {

    constructor(
        nome: string,
        cpf: string,
        salarioBase: number
    ) {
        super(nome, cpf, salarioBase);
    }

    // Implementação do método abstrato
    public calcularSalario(): number {

        return this.salarioBase;

    }
}