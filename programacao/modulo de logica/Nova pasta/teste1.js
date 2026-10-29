let senha = "123"
let cont = 1

while (cont <=3 || senha === "123"){
    let entrada = prompt("digite a senha")
    
    if((entrada == senha) && cont <=3){
      console.log("acesso permitido!")

    }else{
        console.log("senha incorreta")
    }
 cont++
}