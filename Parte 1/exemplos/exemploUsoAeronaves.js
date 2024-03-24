import { ServicoAeronaves } from '../Classes/ServicoAeronaves.js'
import { AeronaveParticular, AeronaveComercial, AeronavePassageiros, AeronaveCarga } from '../Classes/hierarquiaAeronave.js'

//Criando algumas instâncias de aeronaves

const aeronave1 = new AeronaveParticular("PR-001", 400, 2000, "Empresa A");
const aeronave2 = new AeronavePassageiros("PR-002", 600, 3000, 150, "Companhia Aérea B");
const aeronave3 = new AeronaveCarga("PR-003", 500, 2500, 50, "Companhia Aérea C");


// Criando um serviço de aeronaves
const servicoAeronaves = new ServicoAeronaves()

// Adicionando as aeronaves ao serviço de aeronaves

servicoAeronaves.adicionarAeronave(aeronave1)
servicoAeronaves.adicionarAeronave(aeronave2)
servicoAeronaves.adicionarAeronave(aeronave3)

// Obtendo todas as aeronaves cadastradas
const todasAsAeronaves = servicoAeronaves.todas()

// Exibindo todas as aeronaves cadastradas
console.log("Todas as aeronaves cadastradas:");
todasAsAeronaves.forEach(aeronave => {
    console.log("==============================================================");
    console.log("- Prefixo:", aeronave.getPrefixo());
    console.log("  Tipo:", aeronave.getTipo());
    console.log("  Velocidade de Cruzeiro:", aeronave.getVelocidadeCruzeiro());
    console.log("  Autonomia:", aeronave.getAutonomia());
    if (aeronave instanceof AeronaveParticular) {
        console.log("  Nome da Empresa de Manutenção:", aeronave.getRespManutencao());
    } else if (aeronave instanceof AeronaveComercial) {
        console.log("  Nome da Companhia Aérea:", aeronave.getNomeCIA());
        if (aeronave instanceof AeronavePassageiros) {
            console.log("  Quantidade de Passageiros:", aeronave.getMaxPassageiros());
        } else if (aeronave instanceof AeronaveCarga) {
            console.log("  Peso Máximo de Carga:", aeronave.getPesoMax());
        }
    }
});
