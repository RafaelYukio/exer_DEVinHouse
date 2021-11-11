var num = window.prompt("Insira um número de 1 a 10")

function imagemGato() {

    fetch("https://api.thecatapi.com/v1/images/search")
        .then(gato => gato.json())
        .then(data => {
            var gatoURL = data[0].url;
            var sec = document.createElement("section");
            sec.style.backgroundImage = "url(" + gatoURL + ")";
            document.getElementById("container").appendChild(sec)
        })
}

function imagemCachorro() {

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(cachorro => cachorro.json())
        .then(data => {
            var cachorroURL = data.message;
            var sec = document.createElement("section");
            sec.style.backgroundImage = "url(" + cachorroURL + ")";
            document.getElementById("container").appendChild(sec)
        })
}

if (num > 10 || num < 1) {
    window.alert("Número inválido")
} else {
    for (i = 1; i <= num; i++) {
        imagemGato();
        imagemCachorro();
    }
}