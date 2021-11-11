var texto = [];

window.alert("Escreva para adicionar na array. Escreva 'parar' para finalizar array");

do {
    var palavra = window.prompt("Digite uma palavra");
    if (palavra != "parar") {
        texto.push(palavra);
    }
} while (palavra != "parar")

texto.sort((a, b) => {
    if (a.length < b.length) {
        return -1
    }
    if (a.length > b.length) {
        return 1
    }
    if (a.length == b.length) {
        return 0
    }
})

for (i = 0; i < texto.length; i++) {

    var secao = document.createElement("section");
    secao.innerText = texto[i];
    document.getElementById("container").appendChild(secao);
}