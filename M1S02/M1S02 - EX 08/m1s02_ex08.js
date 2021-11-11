var palavrasA = ["animal", "carro", "humano", "prédio", "cadeira", "objeto"];
var palavrasB = palavrasA.slice();

console.log(palavrasA);
console.log(palavrasB);

palavrasA.sort((a, b) => {
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

for (i = 0; i < palavrasA.length; i++){

    var secao = document.createElement("section");
    secao.innerText = palavrasA[i];
    document.getElementById("container").appendChild(secao);
}

    console.log(palavrasA);
console.log(palavrasB);