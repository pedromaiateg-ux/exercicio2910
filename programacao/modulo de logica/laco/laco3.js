let idade = [21,45,32,21,47,54,21,85,21]
let cont = 0
for(let x = 1; x < idade.length; x++){
    if(idade[x] == 21){
cont++
    }
}
    console.log("a quantidade de idades 21 é:" + cont)