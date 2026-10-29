export abstract class Funcionario{
    constructor(
        private nome: string,
        private cpf: string,
        protected SalarioBase: number 

    ){
    }
    public getnome(): string{
        return this.nome
    }
    public getcpf():string{
        return this.cpf
    }
    public getSalarioBase():number{
        return this.SalarioBase
    }
   
public abstract CalcularSalario(): number;
public Exibirinformações(){
    console.log("===============")
    console.log("Nome: ", this.nome)
    console.log("CPF: ", this.cpf )
    console.log("SalarioBase: ", this.SalarioBase)
    console.log("Calculo do Salario: ", this.CalcularSalario)

}

}