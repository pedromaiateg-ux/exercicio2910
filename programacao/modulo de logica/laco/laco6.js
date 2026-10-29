//em uma lista de valor numericos encontrar o total de valores pares, impares e multiplos de 3
let lista = [20, 256, 120, 47, 87, 25, 36]

let pares = 0
let impares = 0
let multiplosDe3 = 0

for (let x = 0; x < lista.length; x++){

    if (lista[x] % 2 === 0) {
        pares++
    } else {
        impares++
    }

    if (lista[x] % 3 === 0) {
        multiplosDe3++
    }
}

console.log("Total de pares:", pares)
console.log("Total de ímpares:", impares)
console.log("Total de múltiplos de 3:", multiplosDe3)