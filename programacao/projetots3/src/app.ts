
import { CalculadoraImc } from "./CalculadoraImc.js";

// Captar as tags do HTML com o getElementById
const form = document.getElementById("form-imc") as HTMLFormElement;
const peso = document.getElementById("peso") as HTMLInputElement;
const altura = document.getElementById("altura") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLDivElement;

form.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const peso1 = Number(peso.value);
    const altura1 = Number(altura.value);

    if (peso1 <= 0 || altura1 <= 0) {
        resultado.innerHTML = "Digite valores maiores que zero";
        return;
    }

    const calculadora = new CalculadoraImc(peso1, altura1);

    const imc = calculadora.calcular();
    const classificacao = calculadora.classificar();

    resultado.innerHTML = `
        <p>IMC: ${imc.toFixed(2)}</p>
        <p>Classificação: ${classificacao}</p>
    `;
});
