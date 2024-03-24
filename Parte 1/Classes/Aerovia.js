import { validate } from "bycontract";

export class Aerovia {
    #id
    #origem
    #destino
    #tamanho

    // Construtor da classe Aerovia
    constructor(id, origem, destino, tamanho) {
        // Validação dos argumentos
        validate(arguments, ["String", "String", "String", "Number"]);

        // Verifica se todos os campos obrigatórios são fornecidos
        if (!id || !origem || !destino) {
            throw new Error("Id, origem e destino da aerovia são obrigatórios.");
        }

        // Verifica se o tamanho da aerovia é maior ou igual a zero
        if (tamanho <= 0) {
            throw new Error("O tamanho da aerovia deve ser um número positivo maior que zero.");
        }

        // Inicializa os atributos da classe com os valores fornecidos
        this.#id = id
        this.#origem = origem
        this.#destino = destino
        this.#tamanho = tamanho
    }

    // Métodos getters para acessar os atributos privados
    getId() {
        return this.#id
    }

    getOrigem() {
        return this.#origem
    }

    getDestino() {
        return this.#destino
    }

    getTamanho() {
        return this.#tamanho
    }
}