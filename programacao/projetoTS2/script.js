//localizar os elementos pelo ID
const titulo = document.getElementById("titulo")
const mensagem = document.getElementById("mensagem")
const botao = document.getElementById("botao")

//eventou com clique 
botao.addEventListener("click", function () {
    titulo.textContent = "Olá, seja bem vindo!!"
    mensagem.textContent = "O conteúdo do DOM foi alterado com sucesso!"
})