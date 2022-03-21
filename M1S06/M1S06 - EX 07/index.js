let somar = () => {

    document.getElementById("resultado").innerText =  parseInt(document.getElementById("input1").value) + parseInt(document.getElementById("input2").value);
}
let subtrair = () => {

    document.getElementById("resultado").innerText =  parseInt(document.getElementById("input1").value) - parseInt(document.getElementById("input2").value);
}
let multiplicar = () => {

    document.getElementById("resultado").innerText =  parseInt(document.getElementById("input1").value) * parseInt(document.getElementById("input2").value);
}
let dividir = () => {

    document.getElementById("resultado").innerText =  parseInt(document.getElementById("input1").value) / parseInt(document.getElementById("input2").value);
}