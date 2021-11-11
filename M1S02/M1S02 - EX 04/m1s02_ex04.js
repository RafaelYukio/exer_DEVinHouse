var nAleatorio = [];
var maioresMil = 0;
var quantosCem = 0;

function aleatorizar() {
    nAleatorio = [];
    maioresMil = 0;
    quantosCem = 0;
    document.body.style.backgroundImage = "";

    for (i = 0; i < 1000; i++) {
        nAleatorio.push(Math.floor(Math.random() * 1000 + 1));
    }

    for (i = 0; i < 1000; i++) {
        if (nAleatorio[i] == 100) {
            quantosCem++;
        }
    }

    for (i = 0; i < 1000; i++) {
        if (nAleatorio[i] > 500) {
            maioresMil++;
        }

        if (quantosCem > 1) {
            document.body.style.backgroundColor = "black";
        }
        else if (quantosCem == 1) {
            document.body.style.backgroundColor = "orange";
        }

        else {
            if (maioresMil > 500) {
                document.body.style.backgroundImage = "url(https://i.picsum.photos/id/742/200/300.jpg?hmac=sHIMP5dqRR6HpQIp-okFHEfCF2qUo8G3_cq7DuFoCRw)";
            } else {
                document.body.style.backgroundImage = "url(https://via.placeholder.com/500)";
            }
        }
    }

    document.getElementsByTagName("div")[0].innerHTML = "Números maiores que 500 = " +maioresMil+ ", Números 100 = " +quantosCem;
}

document.getElementById("botao").onclick = aleatorizar;