import { Funcionario } from "./Funcionario.js";
import { FuncionarioMensalista } from "./FuncionarioMensalista.js";
import { FuncionarioHorista } from "./FuncionarioHorista.js";
import { FuncionarioComissionado } from "./FuncionarioComissionado.js";

const mensalista = new FuncionarioMensalista("Pedro","12345678900",2000,300);
const horista = new FuncionarioHorista("João","98765432100",1500, 20, 25);
const comissionado = new FuncionarioComissionado("Carlos","11122233344",2000,10000,0.10);
const f1: Funcionario[] = [ mensalista, horista, comissionado];

mensalista.Exibirinformações()
horista.Exibirinformações()
mensalista.Exibirinformações()
