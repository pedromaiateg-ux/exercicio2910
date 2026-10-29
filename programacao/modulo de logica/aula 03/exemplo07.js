let temperatura = 30;
let luminosidade = 700;
let umidade = 50;

if (
    temperatura >= 20 && temperatura <= 26 &&
    luminosidade >= 500 && luminosidade <= 800 &&
    umidade >= 40 && umidade <= 60
) {

    console.log("Ambiente ideal!");

} else {

    console.log("Ambiente fora do padrão.");

    if (temperatura < 20 || temperatura > 26) {
        console.log("Temperatura inadequada.");
    }

    if (luminosidade < 500 || luminosidade > 800) {
        console.log("Luminosidade inadequada.");
    }

    if (umidade < 40 || umidade > 60) {
        console.log("Umidade inadequada.");
    }

}