let x = 15
let x1 = 1
let contepar = 0 
let conteimpar = 0
while(x1 < 15){
    console.log(x)
    
    if(x%2 == 0){
        contepar++

    }else{
        conteimpar++
     
    }
console.log("Quantidade de pares:", contepar)
console.log("Quantidade de ímpares:", conteimpar)
    x1++
}