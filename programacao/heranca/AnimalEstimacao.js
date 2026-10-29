import { AnimalEstimacao } from "./AnimalEstimacao.js";
export class AnimalEstimacao{
    constructor(nome,idade,raca){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    fazerSom(){
        console.log("o pet esta fazendo som!")
    }
    comer(){
    console.log("o pet esta comendo!")
}

}