import {carro} from "./carro"
import {moto} from "./moto"

let MeuCarro = new carro("civic", 2022, "preto")
let MinhaMoto = new moto("factor", 2020, "vermelha")

MeuCarro.lavados();
MinhaMoto.fila();
console.log(MeuCarro)