function alerta() {
    let nome = prompt("Nome");
    let idade = prompt("Idade");
    let esportefav = prompt("Esporte favorito");
    let diadasemana = prompt("Dia da semana predileto");
    let nomedealguem = prompt("Nome de alguém importante");
    let nomeadmira = prompt("Nome de alguém que admira");
    
    var texto = "Hoje, " + diadasemana +", é um dia histórico. Todos os fãs de "+ esportefav +" estão maravilhados" +
    " com a proeza realizada pelo(a) atleta "+ nome +". "+ nomedealguem +" não conteve as lágrimas ao comentar sobre" +
    " em uma entrevista e até o(a) "+ nomeadmira +" twittou “é muito bom ver alguém com "+ idade +" demonstrando tanta habilidade."
    
    window.alert(texto);
}

alerta();