export class Produto2{
    private NumeroID: number;
    private Quantidade: number;
    private Nome: string;
    private ValorDecimal: number;
    constructor( NumeroID: number, Quantidade: number, Nome: string,ValorDecimal: number){
        this.NumeroID = NumeroID
        this.Quantidade = Quantidade
        this.Nome = Nome 
        this.ValorDecimal = ValorDecimal
    }
    getNumeroID(){
       return this.NumeroID
    }
    getQuantidade(){
        return this.Quantidade
    }
    getNome(){
        return this.Nome
    }
    getValorDecimal(){
        return this.ValorDecimal
    }
    setNumeroID(NumeroID:number):void{
        if(NumeroID >= 1 && NumeroID <= 9999){
        this.NumeroID = NumeroID
        }
    }
    setQuantidade(Quantidade:number):void{
        if(Quantidade >= 0){
        this.Quantidade = Quantidade
    }
        }
      
    setNome(Nome:string):void{
        this.Nome = Nome
    }
    
    setValorDecimal(ValorDecimal:number):void{
        if(ValorDecimal >= 0){
        this.ValorDecimal = ValorDecimal
        }
    
    }
}