import { Funcionario } from "./Funcionario";

export class FuncionarioComissionado extends Funcionario {

    private valorVenda: number;
    private porcentagemComissao: number;

    constructor(nome: string, cpf: string, salarioBase: number, 
        valorVenda: number, porcentagemComissao: number)
        {
            super(nome, cpf, salarioBase);
            this.valorVenda = valorVenda;
            this.porcentagemComissao = porcentagemComissao
        }

        // GET
    public getValorVendas(): number {
        return this.valorVenda;
    }

    // SET
    public setValorVendas(valor: number): void {
        this.valorVenda = valor;
    }

    // GET
    public getPercentualComissao(): number {
        return this.porcentagemComissao;
    }

    // SET
    public setPercentualComissao(percentual: number): void {
        this.porcentagemComissao = percentual;
    }

    public calcularSalario(): number{
        const comissao = this.valorVenda * this.porcentagemComissao / 100
        return this.salarioBase + comissao;
    }
}

