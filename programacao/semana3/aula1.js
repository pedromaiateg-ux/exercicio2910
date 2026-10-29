class AnimalEstimacao {

    constructor(nome, idade, raca) {
         if(new.target === AnimalEstimacao) {
            throw new Error("Não é possível instanciar uma classe abstrata.");
         }
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }


    fazerSom() {
        console.log("O pet está fazendo um som.");
    }

    comer() {
        console.log("O pet está comendo.");
    }
}

class Gato extends AnimalEstimacao {
    constructor(nome, idade, raca) {
        super(nome, idade, raca);
    }
}

let animal = new AnimalEstimacao("Bob", 5, "vira-lata");

meuGato.comer();
meuGato.fazerSom();

console.log(meuGato);
