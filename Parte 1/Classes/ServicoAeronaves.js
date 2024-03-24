import { Aeronave } from "./Aeronave.js";

export class ServicoAeronaves {
    #aeronaves 

    // Construtor da classe ServicoAeronaves
    constructor(){
        // Inicializa a lista de aeronaves como um array vazio
        this.#aeronaves = []
    }

    // Método para adicionar uma nova aeronave à lista
    adicionarAeronave(aeronave) {
        // Verifica se o objeto passado é uma instância válida de Aeronave
        if (!(aeronave instanceof Aeronave)) {
            throw new Error("O objeto passado não é uma instância de Aeronave.");
        }

        // Adiciona a aeronave à lista
        this.#aeronaves.push(aeronave)
    }

    // Método para recuperar todas as aeronaves disponíveis
    todas(){
        return this.#aeronaves
    }
}