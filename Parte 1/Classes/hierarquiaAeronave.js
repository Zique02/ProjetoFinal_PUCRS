import { Aeronave } from "./Aeronave.js"
import { validate } from "bycontract";

export class AeronaveParticular extends Aeronave {
    #respmanutencao

    // Construtor da classe AeronaveParticular
    constructor(prefixo, velocidadeCruzeiro, autonomia, respmanutencao) {
        // Chama o construtor da classe pai (Aeronave)
        super(prefixo, "Particular", velocidadeCruzeiro, autonomia)

        // Valida os tipos de dados
        validate(arguments, ["String", "Number", "Number", "String"]);

        // Verifica se a empresa de manutenção é fornecida
        if (!respmanutencao) {
            throw new Error("Nome da empresa de manutenção é obrigatório para aeronaves particulares.");
        }


        // Inicializa o atributo específico da classe AeronaveParticular
        this.#respmanutencao = respmanutencao
    }


    // Método getter para acessar o atributo privado
    getRespManutencao() {
        return this.#respmanutencao
    }


}

export class AeronaveComercial extends Aeronave {
    #nomeCIA

    // Construtor da classe AeronaveComercial
    constructor(prefixo, tipo, velocidadeCruzeiro, autonomia, nomeCIA) {

        // Chama o construtor da classe pai (Aeronave)
        super(prefixo, tipo, velocidadeCruzeiro, autonomia)

        // Valida os tipos de dados
        validate(arguments, ["String", "String", "Number", "Number", "String"]);

        // Verifica se a companhia aérea é fornecida
        if (!nomeCIA) {
            throw new Error("Nome da companhia aérea é obrigatório para aeronaves comerciais.");
        }

        // Inicializa o atributo específico da classe AeronaveComercial
        this.#nomeCIA = nomeCIA
    }

    // Método getter para acessar o atributo privado
    getNomeCIA() {
        return this.#nomeCIA
    }
}

// Classe AeronavePassageiros, que é uma subclasse de AeronaveComercial
export class AeronavePassageiros extends AeronaveComercial {
    #maxPassageiros

    // Construtor da classe AeronavePassageiros
    constructor(prefixo, velocidadeCruzeiro, autonomia, maxPassageiros, nomeCIA) {
        // Chama o construtor da classe pai (AeronaveComercial)
        super(prefixo, "Comercial", velocidadeCruzeiro, autonomia, nomeCIA)

        // Valida os tipos de dados
        validate(arguments, ["String", "Number", "Number", "Number", "String"]);

        // Verifica se a o maximo de passageiros é maior que 0
        if (maxPassageiros <= 0) {
            throw new Error("Quantidade de passageiros deve ser um número positivo maior que zero.");
        }

        // Inicializa o atributo específico da classe AeronavePassageiros
        this.#maxPassageiros = maxPassageiros
    }

    // Método getter para acessar o atributo privado
    getMaxPassageiros() {
        return this.#maxPassageiros
    }
}

// Classe AeronaveCarga, que é uma subclasse de AeronaveComercial
export class AeronaveCarga extends AeronaveComercial {
    #pesoMax

    // Construtor da classe AeronaveCarga
    constructor(prefixo, velocidadeCruzeiro, autonomia, pesoMax, nomeCIA) {
        // Chama o construtor da classe pai (AeronaveComercial)
        super(prefixo, "Comercial", velocidadeCruzeiro, autonomia, nomeCIA)

        // Valida os tipos de dados
        validate(arguments, ["String", "Number", "Number", "Number", "String"]);

        // Verifica se o peso máximo de carga é maior que 0
        if (pesoMax <= 0) {
            throw new Error("Peso máximo de carga deve ser um número positivo maior que zero.");
        }

        // Inicializa o atributo específico da classe AeronaveCarga
        this.#pesoMax = pesoMax;
    }

    // Método getter para acessar o atributo privado
    getPesoMax() {
        return this.#pesoMax
    }
}