var nome = document.forms[0].nome;
var imagem = document.forms[0].imagem;
var descricao = document.forms[0].descricao;
var botao = document.forms[0].botao;

var imagem = document.getElementsByTagName("img")[0];
var tituloNome = document.getElementById("tituloNome");
var texto = document.getElementById("texto");

var valorTeste = 20

export default {nome, imagem, descricao, botao, tituloNome, texto, valorTeste};