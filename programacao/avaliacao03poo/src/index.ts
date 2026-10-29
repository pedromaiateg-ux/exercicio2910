import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Desenvolvedor } from "./Desenvolvedor";

console.log("======================================");
console.log("QUESTÃO 1");
console.log("======================================");

let funcionario1 = new Funcionario("Carlos", 30, 3500);
let funcionario2 = new Funcionario("Maria", 28, 4200);

funcionario1.exibirDados();

console.log("--------------------");

funcionario2.exibirDados();


console.log("\n======================================");
console.log("QUESTÃO 2");
console.log("======================================");

let funcionario3 = new Funcionario("Pedro", 25, 3000);

console.log(`Salário antes do aumento: R$ ${funcionario3.getSalario()}`);

funcionario3.aumentarSalario(10);

console.log(`Salário depois do aumento: R$ ${funcionario3.getSalario()}`);


console.log("\n======================================");
console.log("QUESTÃO 3");
console.log("======================================");

let gerente = new Gerente(
    "João",
    40,
    7000,
    "Tecnologia"
);

let desenvolvedor = new Desenvolvedor(
    "Pedro",
    25,
    4500,
    "TypeScript"
);

gerente.exibirDados();

console.log("--------------------");

desenvolvedor.exibirDados();