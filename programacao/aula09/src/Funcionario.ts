export abstract class Funcionario{
    private nome: string;
    private cpf: string
    protected salarioBase: number;
    constructor(nome: string, cpf: string, salarioBase: number){
        this.nome = nome;
        this.cpf = cpf
        this.salarioBase = salarioBase
    }
    // encapsulemento 
    public getnome():string{
        return this.nome;
    }
      public getcpf():string{
        return this.cpf;
    }
      public getsalarioBase():number{
        return this.salarioBase;
    }
      public setnome(nome: string): void {
        this.nome = nome;
    }
    public setcpf(cpf: string): void {
        this.cpf = cpf;
    }
    public setsalarioBase(salarioBase: number): void {
        this.salarioBase = salarioBase;
    }
    public abstract calcularSalario():number;
    public exibirDados(){
        console.log("----------------------");
        console.log("Nome: ",  this.nome);
        console.log("cpf: ", this.cpf );
        console.log("salario]: ", this.salarioBase );
        console.log("salario calculado:", this.calcularSalario().toFixed(2))
    }
}