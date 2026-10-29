export class Produto{
    private NomeProduto: string;
    private ValorProduto: number; 
    private AnoProduto: string;
    private Valorproduto: number
    constructor(NomeProduto:string, ValorProduto:number, AnoProduto:string, Valorproduto:number){
            this.NomeProduto = NomeProduto;
            this.ValorProduto = ValorProduto;
            this.AnoProduto = AnoProduto
            this.Valorproduto = Valorproduto;
    }
getNomeProduto(){
    return this.NomeProduto
}
getValorProduto(){
    return this.ValorProduto
}
getAnoProduto(){
    return this.AnoProduto
}
getValorproduto(){
    return this.Valorproduto
}

    public ExibirProduto(){
    console.log("Nome: ", this.getNomeProduto())
    console.log("Valor da Limpeza : ", this.getValorproduto())
    console.log("Ano do Carro: ", this.getAnoProduto())
    console.log("Valor que o Carro Custa: ", this.getValorProduto())
}
}

