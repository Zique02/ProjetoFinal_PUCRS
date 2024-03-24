import { validate } from "bycontract";

export class Piloto {
    #matricula
    #nome
    #habilitacaoAtiva

    // Construtor da classe Piloto
    constructor(matricula, nome, habilitacaoAtiva) {
        // Validação dos argumentos
        validate(arguments, ["String", "String", "Boolean"])
        
        // Verifica se os dados são fornecidos
        if (!matricula || !nome) {
            throw new Error("Número de matrícula e nome do piloto são obrigatórios")
        }

        // Inicialização dos atributos da classe
        this.#matricula = matricula
        this.#nome = nome
        this.#habilitacaoAtiva = habilitacaoAtiva
    }

    // Métodos getters para acessar os atributos privados
    getMatricula() {
        return this.#matricula
    }

    getNome() {
        return this.#nome
    }

    getHabilitacaoAtiva() {
        return this.#habilitacaoAtiva
    }
}