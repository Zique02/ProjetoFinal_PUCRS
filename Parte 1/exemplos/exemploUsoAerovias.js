import { Aerovia } from "../Classes/Aerovia.js"
import { ServicoAerovias } from "../Classes/ServicoAerovias.js"

// Criando algumas instâncias de aerovias
const aerovia1 = new Aerovia("A1", "Aeroporto A", "Aeroporto B", 1000);
const aerovia2 = new Aerovia("A2", "Aeroporto B", "Aeroporto C", 1500);
const aerovia3 = new Aerovia("A3", "Aeroporto A", "Aeroporto C", 1200);

// Criando um serviço de aerovias
const servicoAerovias = new ServicoAerovias()

// Adicionando as aerovias ao serviço de aerovias
servicoAerovias.adicionarAerovia(aerovia1)
servicoAerovias.adicionarAerovia(aerovia2)
servicoAerovias.adicionarAerovia(aerovia3)

//Obtendo as aerovias disponíveis para voos entre origem e destino especificados
const origem = "Aeroporto A"
const destino = "Aeroporto B"
const aeroviasDisponiveis = servicoAerovias.recupera(origem, destino)

// Exibindo as aerovias disponíveis
console.log(`Aerovias disponíveis para voos de ${origem} para ${destino}:`);
aeroviasDisponiveis.forEach(aerovia => {
    console.log("===============================================");
    console.log("- Id:", aerovia.getId());
    console.log("  Origem:", aerovia.getOrigem());
    console.log("  Destino:", aerovia.getDestino());
    console.log("  Tamanho:", aerovia.getTamanho());
});
