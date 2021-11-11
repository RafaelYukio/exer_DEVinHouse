var textos = ["animal", "carro", "humano", "prédio", "cadeira", "objeto"];
textos.sort();

for (i = 0; i < textos.length; i++) {

    var novaSecao = document.createElement("section");
    var nome = novaSecao.innerText = textos[i];
    document.getElementById("container").appendChild(novaSecao);

}
