var numAtual;
var numAnterior;
var resultado = 0;

function soma() {

    numAnterior = resultado;
    numAtual = document.forms["calc"]["numero"].valueAsNumber;
    resultado = numAnterior + numAtual;

    document.getElementById("resultado").innerText = resultado;

}

function sub() {

    numAnterior = resultado;
    numAtual = document.forms["calc"]["numero"].valueAsNumber;
    resultado = numAnterior - numAtual;

    document.getElementById("resultado").innerText = resultado;

}

function mult() {

    numAnterior = resultado;
    numAtual = document.forms["calc"]["numero"].valueAsNumber;
    resultado = numAnterior * numAtual;

    document.getElementById("resultado").innerText = resultado;

}

function div() {

    numAnterior = resultado;
    numAtual = document.forms["calc"]["numero"].valueAsNumber;
    if (numAtual != 0) {
        resultado = numAnterior / numAtual;
    }

    document.getElementById("resultado").innerText = resultado;

}