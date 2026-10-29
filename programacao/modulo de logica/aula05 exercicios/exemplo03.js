//calculadora: o usuario vai digitar um operador /, *, -, + - no final ele vai calcular dois numeros.

let n1 = 10 
let n2 = 3
let operador = "+"

switch (operador){
    case "+" :
console.log("a soma dos valores é:" + (n1+n2))
break

case "-" :
console.log("a subtração é:" + (n1-n2))
break

case "/":
    console.log("a divisão dos valores é:" +  (n1/n2))
    break

    case "*" :
        console.log("a multiplicação dos valores :" + (n1*n2))
        break
        default:
        console.log("digite o operador valido +, -, /, *")

}