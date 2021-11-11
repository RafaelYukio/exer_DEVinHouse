var nParticipantes = 0;
var iTotal = 0;
var nSatisfeitos = 0;

function participar() {

    var nome = window.prompt("Digite seu nome");
    var satisfacao = parseInt(window.prompt("Digite um número de 1 a 10 para expressar sua satisfação"));
    var idade = parseInt(window.prompt("Digite sua idade"));
    var incluir = window.confirm("Podemos incluir você na lista de satisfeitos?");

    if (nome != "" && satisfacao > 0 && idade > 0) {
        window.alert("Salvo com sucesso");
        listarParticipante(nome, satisfacao, idade, incluir);
        numeroParticipantes();
        idadeMedia(idade)

        if (incluir) {
            numeroSatisfeitos();
        }

    } else {
        window.alert("Dados inválidos");
    }


}

function listarParticipante(nome, satisfacao, idade, incluir) {

    if (incluir) {
        incluir = "incluído";
    } else {
        incluir = "não incluído";
    }

    var participante = document.createTextNode("- " + nome + ", " + idade + " anos, " + satisfacao + " de satisfação, " + incluir + " em satisfeitos;");
    document.getElementById("listaParticipantes").appendChild(participante);
    document.getElementById("listaParticipantes").appendChild(document.createElement("br"));
}

function numeroParticipantes() {
    nParticipantes++;
    document.getElementById("numeroParticipantes").innerHTML = nParticipantes;
}

function idadeMedia(idade) {
    iTotal = iTotal + idade;
    var iMedia = iTotal / nParticipantes;
    document.getElementById("idadeMedia").innerHTML = iMedia;
}

function numeroSatisfeitos() {
    nSatisfeitos++;
    document.getElementById("numeroSatisfeitos").innerHTML = nSatisfeitos;
}

document.getElementById("clicar").onclick = participar;