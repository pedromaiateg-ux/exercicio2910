import{ Gato} from "./Gato.js"
    
import{Cachorro} from "./Cachorro.js"

let meuCao = new Cachorro("Rex", 4, "Pastor Belga");
let meuGato = new Gato("Garfield", 2, "Persa");

//meuCao.comer();
//meuGato.comer();
//console.log(`Dados do Pet ${meuCao.nome}, ${meuCao.idade}, ${meuCao.raca}`);

//console.log(meuGato);

meuCao.fazerSom();