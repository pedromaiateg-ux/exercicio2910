import{Gato} from "./Gato.js";
import{Cachorro} from "./Cachorro.js";
//class Main(){
let meuCao = new Cachorro("Rex", 4, "pastor belga");
let meuGato = new Gato("Garfield", 2, "persa")

meuCao.comer();
meuGato.comer();

console.log(`dados do pet" ${meuCao.nome}, ${meuCao.idade}, ${meuCao.raca}`);

console.log(meuGato);
//}