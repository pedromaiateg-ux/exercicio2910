//lista de vetor
   //indice       0         1        2
let pessoas = ["carlos", "roberto", "célio", 45]

console.log(pessoas [4])

//lista de objetos
let pessoas2 = {
    nome: "maria",
    idade: 25,
    estalogado: true
}
console.log(pessoas2.nome +"-"+ pessoas2.idade)

pessoas.map(
    function(nome){
        console.log(nome)
    }
)
