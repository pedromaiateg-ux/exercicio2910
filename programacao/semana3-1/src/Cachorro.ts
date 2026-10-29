export class Cachorro {
    private _nome: string;
    private _raca: string;
    private _idade: number;

    constructor(nome: string, raca: string, idade: number) {
        this._nome = nome;
        this._raca = raca;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get raca() {
        return this._raca;
    }

    set raca(raca: string) {
        this._raca = raca;
    }

    get idade() {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }

    late() {
        console.log("Meu cachorro faz esse som: au au!");
    }
}