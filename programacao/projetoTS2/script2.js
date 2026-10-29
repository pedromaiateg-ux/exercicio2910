//pegando os elementos do ID la no htmml
const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")

botao.addEventListener("click", function(){
    //pegando os valores de tudo 
    const nomeAluno = nome.value 
    const idadeAluno = idade.value 

    //exibindo dados na página
    resultado.textContent = `Nome: ${nomeAluno} - Idade: ${idadeAluno}`
})