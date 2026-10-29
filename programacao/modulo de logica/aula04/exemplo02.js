//salario > 2000 - 5%
//salario < 4000 - 10%
//salario > 4000 - 15%

let salario = 5000

let desconto = 0
let valordesconto = 0
let salarioliquido = 0

if(salario <= 2000){
    desconto = 5
}else{
    if(salario <= 4000){
        desconto = 10 
    }else{
        desconto = 15
    }
}
//calculo do desconto 
valordesconto = salario * ( desconto / 100)
//calculo do salario liquido
salarioliquido = salario - valordesconto
console.log(valordesconto)
console.log("o salario liquido é: ", salarioliquido)

let total = salario * (10/100)
let total2 = salario * 0.10
console.log(total)
console.log(total2)