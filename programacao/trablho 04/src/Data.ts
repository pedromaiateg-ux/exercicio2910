
export class Data{
private Mes: number
private Dia: number
private Ano: number
 constructor(Mes:number, Dia:number, Ano:number){
        this.Mes = Mes;
        this.Dia = Dia;
        this.Ano = Ano;
    }
    getMes(){
        return this.Mes
    }
    getDia(){
        return this.Dia
    }
    getAno(){
        return this.Ano
    }
    setMes(Mes:number):void{
       if(Mes >= 1 && Mes <= 12){
        this.Mes = Mes
       } 
    }
    setDia(Dia:number):void{
        if(Dia >= 1 && Dia <= 31){
        this.Dia = Dia
        }
       
    }
    setAno(Ano:number){
        if(Ano > 0){
        this.Ano = Ano
        }
    }
ExibirData():string{
    return `${this.Dia}/${this.Mes}/${this.Ano}`
}
}