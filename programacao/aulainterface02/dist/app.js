import { Circulo } from "./Circulo.js";
import { Retangulo } from "./Retangulo.js";

let opcao = prompt(
    "Escolha uma forma geométrica:\n\n" +
    "1 - Retângulo\n" +
    "2 - Círculo"
);

let forma;

if (opcao === "1") {

    let base = Number(prompt("Digite a base do retângulo:"));
    let altura = Number(prompt("Digite a altura do retângulo:"));

    forma = new Retangulo("Retângulo", base, altura);

} else if (opcao === "2") {

    let raio = Number(prompt("Digite o raio do círculo:"));

    forma = new Circulo("Círculo", raio);

} else {

    document.body.innerHTML = "<h1>Opção inválida!</h1>";
    throw new Error("Opção inválida!");

}

let area = forma.calcularArea();

document.body.innerHTML = `
    <h1>Calculadora de Formas Geométricas</h1>

    <p>Forma: ${forma.getNome()}</p>

    <p>Área: ${area.toFixed(2)}</p>
`;