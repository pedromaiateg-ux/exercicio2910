import { AnimalEstimacao } from "./AnimalEstimacao.js";

export class Cachorro extends AnimalEstimacao{
 constructor(nome, idade, raca){
 super(nome, idade, raca)
 }

fazerSom(){
    console.log("Au,Au!")
}
}