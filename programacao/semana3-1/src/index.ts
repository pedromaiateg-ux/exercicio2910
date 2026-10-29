import { Gato } from "./Gato.js";
import {Cachorro } from "./Cachorro.js";

let MeuGato = new Gato("loop", "gat", 2)
let MeuCachorro = new Cachorro("luck", "vira-lata", 3)


console.log("Quero apresentar o meu Cachorro:")
console.log(MeuCachorro)
MeuCachorro.late()
console.log("=====================================")
console.log("Quero apresentar o meu Gato ")
console.log(MeuGato)
MeuGato.voz()