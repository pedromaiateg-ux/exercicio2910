let nome = ["celso", "maria", "andre", "julia", "joana"]

// encontrar o nome que o usuario digitar
// boolenas
let procurado = "celso"

let encontrado = false
    for(let x = 0; x < nome.length; x++){
if(nome[x].toLowerCase() == procurado.toLocaleLowerCase())
{
    encontrado = true
    break
}
    }
if(encontrado){
    console.log("nome encontrado")

}else{
    console.log("nomme nao encontrado")
}