import { Funcionario } from "./Funcionario.ts"
import { Gerente } from "./Gerente.ts"
import { Desenvolvedor } from "./Desenvolvedor.ts"

console.log("QUESTÃO 1")

let funcionario1 = new Funcionario("Carlos", 30, 3500)
let funcionario2 = new Funcionario("Maria", 28, 4200)

funcionario1.exibirDados()

console.log("========================")

funcionario2.exibirDados()

console.log("========================")
console.log("QUESTÃO 2")

let funcionario3 = new Funcionario("Pedro", 25, 3000)

console.log("Salário antes do aumento: R$ " + funcionario3.getSalario())

funcionario3.aumentarSalario(10)

console.log("Salário depois do aumento: R$ " + funcionario3.getSalario())

console.log("========================")
console.log("QUESTÃO 3")

let gerente = new Gerente("João", 40, 7000, "Tecnologia")

let desenvolvedor = new Desenvolvedor("Pedro", 25, 4500, "TypeScript")

gerente.exibirDados()

console.log("========================")

desenvolvedor.exibirDados()