import { validate } from "bycontract"

export class Aeronave {
    #prefixo
    #tipo
    #velocidadeCruzeiro
    #autonomia


    // Construtor da classe Aeronave
    constructor(prefixo, tipo, velocidadeCruzeiro, autonomia) {
        // Validação dos argumentos
        validate(arguments, ["String", "String", "Number", "Number"]);

        // Verifica se o prefixo e o tipo são fornecidos
        if (!prefixo || !tipo) {
            throw new Error("Prefixo e tipo da aeronave são obrigatórios.");
        }

        // Verifica se a velocidade de cruzeiro e a autonomia são números positivos
        if (velocidadeCruzeiro <= 0 || autonomia <= 0) {
            throw new Error("Velocidade de cruzeiro e autonomia devem ser números positivos maiores que zero.");
        }


        // Inicializa os atributos da classe com os valores fornecidos
        this.#prefixo = prefixo
        this.#tipo = tipo
        this.#velocidadeCruzeiro = velocidadeCruzeiro
        this.#autonomia = autonomia
    }


    // Métodos getters para acessar os atributos privados
    getPrefixo() {
        return this.#prefixo
    }

    getTipo() {
        return this.#tipo
    }

    getVelocidadeCruzeiro() {
        return this.#velocidadeCruzeiro
    }

    getAutonomia() {
        return this.#autonomia
    }
}