let n1 = 10;
let n2 = 5;

let opcao = 4;

console.log("===== MENU =====");
console.log("1 - Números iguais");
console.log("2 - Soma PAR ou ÍMPAR");
console.log("3 - Qual é o maior?");
console.log("4 - Subtração");


switch(opcao){
    case 1 :
     if(n1 == n2)
            console.log("os numeros são iguais:");
    else
    console.log("os numeros são diferentes");
    break


case 2:
        if((n1 + n2) % 2 == 0){
            console.log("o numero e par")
        }else{
            console.log("o numero e impar")
        }
        break
     case 3:
        if(n1 > n2){
            console.log("o numero n1 e maior")
        }else{
            console.log("o numero n2 e maior")
        }
        break
    case 4:
          console.log("a subtracao e " + (n1-n2))
          break
          default:
            console.log("digite uma opcao valida")  
}