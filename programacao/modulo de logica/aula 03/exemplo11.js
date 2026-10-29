let categoria = 2
let valor = 250
let desconto = 0

switch(categoria){
    case 1: "eletronicos" 
    desconto = valor * 0.10
    
    break
    case 2: "vestuario"
    desconto = valor * 0.15
break
case 3 : "alimento"
    desconto = valor * 0.05 
    break
    default: 
        console.log("digite invalido")
}
if ( valor > 200)
    desconto = desconto + (valor * 0.05)

let valorfinal = valor - desconto

console.log(valorfinal)




