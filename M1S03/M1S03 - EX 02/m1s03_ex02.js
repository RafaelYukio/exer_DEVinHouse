var teste;
var conteudo;

function imparPar() {

    function testar() {

        conteudo = document.forms["formulario"]["texto"].value;

        if (conteudo % 2 === 0) {
            return false;
        } else {
            return true;
        }
    }

    teste = testar();

    if (teste) {
        window.alert(conteudo + " é número impar")
    } else {
        window.alert(conteudo + " é número par")
    }
}