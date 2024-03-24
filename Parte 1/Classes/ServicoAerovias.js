import { Aerovia } from "./Aerovia.js";
import { validate } from "bycontract";

export class ServicoAerovias {
    #aerovias 

    // Construtor da classe ServicoAerovias
    constructor(){
        // Inicializa a lista de aerovias como um array vazio
        this.#aerovias = []
    }

    // Método para adicionar uma nova aerovia à lista
    adicionarAerovia(aerovia){
        // Verifica se o objeto passado é uma instância válida de Aerovia
        if (!(aerovia instanceof Aerovia)) {
            throw new Error("O objeto passado não é uma instância de Aerovia.");
        }

        // Adiciona a aerovia à lista
        this.#aerovias.push(aerovia)
    }

    // Método para recuperar as aerovias entre dois aeroportos
    recupera(origem, destino) {
        // Valida os argumentos passados para o método
        validate(arguments, ["String", "String"]);

        // Filtra as aerovias pela origem e destino especificados
        return this.#aerovias.filter(aerovia => aerovia.getOrigem() === origem && aerovia.getDestino() === destino)
    }
}