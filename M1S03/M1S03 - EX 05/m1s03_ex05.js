var lampada = ["https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-acesa.png", "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-apagada.png"]
var imgLamp = document.getElementById("imagem");
imgLamp.src = lampada[0];


function mudarImagem() {
    if (imgLamp.src == lampada[0]) {
        imgLamp.src = lampada[1]
    } else {
        imgLamp.src = lampada[0]
    }
}