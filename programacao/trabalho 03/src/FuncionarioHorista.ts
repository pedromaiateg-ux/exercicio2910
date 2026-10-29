import { Funcionario } from "./Funcionario.js";

export class FuncionarioHorista extends Funcionario{
    private HoraTrabalho: number
    private ValorHora : number
    constructor(nome:string, cpf: string, SalarioBase:number, horatrabalho:number, ValorHora:number){
        super(nome,cpf, SalarioBase);
            this.HoraTrabalho = horatrabalho
            this.ValorHora = ValorHora
    }
    public CalcularSalario(): number {
        return this.SalarioBase + (this.HoraTrabalho * this.ValorHora)
    }
    public override Exibirinformações(): void {
        console.log("===========================================")
        console.log("Nome: ", this.getnome())
        console.log("Cpf: ", this.getcpf())
        console.log("Salario Base: ", this.SalarioBase)
        console.log("Horas trabalhadas: ", this.HoraTrabalho)
        console.log("valor da Hora: ", this.HoraTrabalho)
        console.log("Resultado Final: ", this.CalcularSalario())
        console.log("=============================================")
    }
}