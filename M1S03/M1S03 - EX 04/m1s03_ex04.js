function desconto() {

    var total = document.forms["calc"]["numero"].valueAsNumber;
    var desc = document.forms["calc"]["desc"].valueAsNumber;
    desc = total * (desc / 100);
    var totalComDesconto = total - desc;

    document.getElementById("total").innerText = total
    document.getElementById("totalComDesconto").innerText = totalComDesconto
    document.getElementById("desconto").innerText = desc
}