const CPF = document.getElementById("CPF")
const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")

botao.addEventListener("click", function(){
    const CPF1 = CPF.value
    const nome2 = nome.value
    const idade3 = idade.value
    

    resultado.textContent = `nome: ${nome2} - Idade: ${idade3} - CPF: ${CPF1}`
})

