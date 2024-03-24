import { Piloto } from "../Classes/Piloto.js";
import { ServicoPilotos } from "../Classes/ServicoPilotos.js";

//Criando alguns objetos da classe Piloto
const piloto1 = new Piloto("123456", "João Silva", true)
const piloto2 = new Piloto("789012", "Maria Souza", false)

//Criando um serviço de pilotos
const servicoPilotos = new ServicoPilotos()

//Adicionando os pilotos ao serviço de pilotos
servicoPilotos.adicionarPiloto(piloto1)
servicoPilotos.adicionarPiloto(piloto2)

//Recuperando um piloto com base na matrícula
const pilotoRecuperado = servicoPilotos.recupera("123456");
console.log("Piloto recuperado:");
console.log("Matrícula:", pilotoRecuperado.getMatricula());
console.log("Nome:", pilotoRecuperado.getNome());
console.log("Habilitação Ativa:", pilotoRecuperado.getHabilitacaoAtiva());