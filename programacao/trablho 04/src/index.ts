import { Produto } from "./Produto.js";
import { Data } from "./Data.js";
import { Produto2 } from "./Produto2.js";
import { Funcionario } from "./Funcionario.js";

console.log("====================");
console.log("PRODUTO==========")
const produto = new Produto("Notebook",3000,"2026",3000);
produto.ExibirProduto();

console.log("=====================");
console.log("DATA==========")

const data = new Data(8, 1, 1990);
console.log("Data:", data.ExibirData());

console.log("====================");
console.log("PRODUTO 2")

const produto2 = new Produto2(100,5,"Caderno",25.50);

console.log("ID:", produto2.getNumeroID());
console.log("Quantidade:", produto2.getQuantidade());
console.log("Nome:", produto2.getNome());
console.log("Preço:", produto2.getValorDecimal());

console.log("====================");
console.log("FUNCIONARIO==============")

const funcionario = new Funcionario("Pedro",3000,"12345678901");

console.log("Nome:", funcionario.getNome());
console.log("Salário:", funcionario.getSalario());
console.log("CPF:", funcionario.getCPF());

console.log("====================");
console.log("ALTERANDO FUNCIONARIO=====================")

funcionario.setNome("João");
funcionario.setSalario(4000);
funcionario.setCPF("98765432109");

console.log("Nome:", funcionario.getNome());
console.log("Salário:", funcionario.getSalario());
console.log("CPF:", funcionario.getCPF());