var corDeFundo = ["#000000","#1A1A1A","#1A3D4C"];
var corDosElementosSobrepostos = ["#E6E6E6","#CCCCCC","#0D2526"];
var corDoTexto = ["white","black"];

function aleatorizar () {
    var aleatorio = Math.floor(Math.random() * 3);
    var Fundo = corDeFundo[aleatorio]
    var aleatorio = Math.floor(Math.random() * 3);
    var ElementosSobrepostos = corDosElementosSobrepostos[aleatorio]
    var aleatorio = Math.floor(Math.random() * 3);
    var Texto = corDoTexto[aleatorio]

    document.getElementById("container").style.backgroundColor = ElementosSobrepostos;
    document.getElementById("artigo").style.backgroundColor = Fundo;
    document.getElementById("artigo").style.color = Texto;
}

document.getElementById("botao").onclick = aleatorizar;