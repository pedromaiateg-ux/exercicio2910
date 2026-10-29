let x = 0
let anterior = 0
let posterior = 1

while(x <= 15){
    console.log(anterior)

    proximo = anterior + posterior
    anterior = posterior
    posterior = proximo

    x++
}