let notas = [4.2, 8.3, 10, 7.8, 5.3, 3.5, 8, 9.5 ]
let aprovado = 0
let reprovado = 0
let soma = 0
for(x = 0; x < notas.length; x++){
    soma += notas[x]
    if(notas[x] > 6){
        aprovado++;
    }else if(notas[x] < 6){
        reprovado++;
    }
       
}
let media = soma/notas.length

console.log("A média das notas é: " + media.toFixed(2));
console.log("Quantidade de notas maiores ou iguais a 6: " + aprovado);
console.log("Quantidade de notas menores que 6: " + reprovado);