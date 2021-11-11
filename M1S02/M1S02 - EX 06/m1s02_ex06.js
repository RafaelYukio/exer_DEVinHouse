var titulo;
var subTitulo;
var bairro;
var lat;
var lng;
var lista;

async function pegarLista() {

    await fetch("https://amapalanches.com/includes/v1/getTodas.php")
        .then(resp => resp.json())
        .then(data => dataLista = data)
    return dataLista;

}

async function listar() {

    lista = await pegarLista();

    var tirarLista = document.getElementById("lista");
    tirarLista.remove();

    var corpo = document.createElement("tbody");
    corpo.id = "lista";
    document.getElementById("tabela").appendChild(corpo);

    for (i = 0; i < lista.todas.length; i++) {
        titulo = lista.todas[i].titulo;
        subTitulo = lista.todas[i].subTitulo;
        bairro = lista.todas[i].bairro;
        lat = lista.todas[i].lat;
        lng = lista.todas[i].lng;

        var trLanchonete = document.createElement("tr");

        var tdBotaoBuscar = document.createElement("td");
        var botaoBuscar = document.createElement("button");
        botaoBuscar.setAttribute("onClick", "atualizarMapa(" + lat + "," + lng + ")")
        var textBotaoBuscar = document.createTextNode("Buscar");

        botaoBuscar.appendChild(textBotaoBuscar);
        tdBotaoBuscar.appendChild(botaoBuscar);

        var tdLanchoneteTitulo = document.createElement("td");
        var textLanchoneteTitulo = document.createTextNode(titulo);
        tdLanchoneteTitulo.appendChild(textLanchoneteTitulo);

        var tdLanchoneteSubTitulo = document.createElement("td");
        var textLanchoneteSubTitulo = document.createTextNode(subTitulo);
        tdLanchoneteSubTitulo.appendChild(textLanchoneteSubTitulo);

        var tdLanchoneteBairro = document.createElement("td");
        var textLanchoneteBairro = document.createTextNode(bairro);
        tdLanchoneteBairro.appendChild(textLanchoneteBairro);

        var tdLanchoneteLat = document.createElement("td");
        var textLanchoneteLat = document.createTextNode(lat);
        tdLanchoneteLat.appendChild(textLanchoneteLat);

        var tdLanchoneteLng = document.createElement("td");
        var textLanchoneteLng = document.createTextNode(lng);
        tdLanchoneteLng.appendChild(textLanchoneteLng);

        trLanchonete.appendChild(tdBotaoBuscar);
        trLanchonete.appendChild(tdLanchoneteTitulo);
        trLanchonete.appendChild(tdLanchoneteSubTitulo);
        trLanchonete.appendChild(tdLanchoneteBairro);
        trLanchonete.appendChild(tdLanchoneteLat);
        trLanchonete.appendChild(tdLanchoneteLng);

        document.getElementById("lista").appendChild(trLanchonete);
    }
}

function criarMapa(lat, lng) {

    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lng, lat]),
            zoom: 17
        }),
    })
}

function atualizarMapa(lat, lng) {

    var elem = document.getElementsByClassName("ol-viewport");
    if (elem.length > 0) {
        elem[0].remove()
        criarMapa(lat, lng);
    } else {
        criarMapa(lat, lng);
    }
}

document.getElementById("listar").onclick = listar;