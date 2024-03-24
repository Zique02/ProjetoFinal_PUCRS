import {validate} from "bycontract";
import { Piloto } from "./Piloto.js";

export class ServicoPilotos {
    #pilotos

    // Construtor da classe ServicoPilotos
    constructor(){
        // Inicializa a lista de pilotos como um array vazio
        this.#pilotos = [];
    }

    // Método para adicionar um novo piloto à lista
    adicionarPiloto(piloto){
        // Verifica se o objeto passado é uma instância válida de Piloto
        if (!(piloto instanceof Piloto)) {
            throw new Error("O objeto passado não é uma instância de Piloto.");
        } 
        // Adiciona o piloto à lista
        this.#pilotos.push(piloto)
    }

    // Método para recuperar um piloto pelo número de matrícula
    recupera(matricula){
        // Valida o argumento passado para o método
        validate(arguments, ["String"]);

        // Procura o piloto na lista pelo número de matrícula
        return this.#pilotos.find(piloto => piloto.getMatricula() === matricula)
    }

    // Método para recuperar todos os pilotos disponíveis
    todos(){
        // Retorna a lista completa de pilotos
        return this.#pilotos
    }
}