var teste;
var conteudo;

function testePrimo() {

    function primo() {
        conteudo = document.forms["formulario"]["texto"].value;

        for (i = 2; i < conteudo; i++) {
            if (conteudo % i === 0) {
                return false;
            }
        }
        return true;
    }
    teste = primo();

    if(teste) {
        window.alert(conteudo + " é número primo")
    } else {
        window.alert(conteudo + " não é número primo")
    }
}