import { Funcionario } from "./Funcionario.js";

export class FuncionarioComissionado extends Funcionario{
    private TotalVendas: number 
    private TaxaComissao: number 
    constructor(nome:string ,cpf:string, SalarioBase:number, TotalVendas: number, TaxaComissao:number){
        super(nome,cpf,SalarioBase)
        this.TaxaComissao = TaxaComissao
        this.TotalVendas = TotalVendas
    }
    public CalcularSalario(): number {
        return this.SalarioBase + (this.TotalVendas * this.TaxaComissao)
    }
    public override Exibirinformações(): void {
        console.log("nome: ", this.getnome())
        console.log("cpf: ", this.getcpf())
        console.log("Salario Base: ", this.SalarioBase )
        console.log("Total de Vendas: " , this.TotalVendas)
        console.log("Taxas e Comissao: ", this.TaxaComissao)
        console.log("Valor Total: ", this.CalcularSalario())
    }

}