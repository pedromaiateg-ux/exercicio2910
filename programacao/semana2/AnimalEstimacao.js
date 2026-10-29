export class AnimalEstimacao{
    constructor(nome, idade, raca){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;        
    }


    fazerSom(){
       console.log("O pet está fazendo som!")
    }

    comer(){
            console.log("O pet está comendo!")
    }

}