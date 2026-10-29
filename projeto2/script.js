const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");

// Abrir e fechar o menu
botaoMenu.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");
    

    botaoMenu.textContent = aberto ? "✕" : "☰";
    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

// Fechar o menu ao clicar em um link
menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        botaoMenu.textContent = "☰";
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
});
// carrossel
//imagens do carrossel
const imagens = [
    "https://picsum.photos/id/1015/900/400",
    "https://picsum.photos/id/1018/900/400",
    "https://picsum.photos/id/1019/900/400"
]
const imagem = document.getElementById("imagemSlider");
let indice = 0
//proxima imgem
document.getElementById("proximo").addEventListener("click", function(){
    indice = (indice + 1) % imagens.length
    imagem.src = imagens[indice]
})
// indice  Calculo       novo indice
 //0        (0 + 1) % 3   1
 //1        (1 + 1) % 3   2
 //2        (2 + 1) % 3   0
//imagem anterior
document.getElementById("anterior").addEventListener("click", function(){
    indice = (indice - 1 + imagens.length) % imagens.length
    imagem.src = imagens[indice]
})
// indice  Calculo           novo indice
 //2        (2 - 1 + 3) % 3   1
 //1        (1 - 1 + 3) % 3   0
 //0        (0 - 1 + 3) % 3   2
