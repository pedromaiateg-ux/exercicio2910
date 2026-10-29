import { FuncionarioHorista } from "./FuncionarioHorista";
import { Funcionario } from "./Funcionario";
import { FuncionarioComissionado } from "./FuncionarioComissionado";
import { FuncionarioMensalista } from "./FuncionarioMensalista";
import { FuncionarioCnpj } from "./FuncionarioCnpj";

//estanciar funciopnario mensalista
const mensalista = new FuncionarioMensalista("Celso", "111.111.111-11", 5000);
//estancia horista
const horista = new FuncionarioHorista("Josias", "222.254.254-23", 3500, 25, 25)
//estanciar comissionado
const Comissionado = new FuncionarioComissionado("Maria", "231.145.124-52", 5230, 250, 5)

console.log("Exibir informações:")
mensalista.exibirDados()
console.log("Comissionado")
Comissionado.exibirDados()

console.log("Exemplo de polimorfismo")
const funcionarios: Funcionario[] = [
    mensalista,
    horista,
    Comissionado
]
for(const funcionario of funcionarios){
    funcionario.exibirDados()
}
const cnpj = new FuncionarioCnpj(
    "Pedro",
    "123.456.789-00",
    3000,
    25,
    25
);
 