import { Funcionario } from "./Funcionario.js";

export class FuncionarioMensalista extends Funcionario{
    private Desconto: number;
constructor(nome: string, cpf:string, SalarioBase:number, Desconto:number){
    super(nome,cpf,SalarioBase)
    this.Desconto = Desconto
}
public CalcularSalario(): number{
    return this.SalarioBase - this.Desconto
}
 public override Exibirinformações(): void {
     console.log("nome: ", this.getnome())
     console.log("cpf: ", this.getcpf())
     console.log("SalarioBase: ", this.SalarioBase)
     console.log("Desconto: ", this.Desconto)
     console.log("salario Final: ", this.CalcularSalario())
 }
}