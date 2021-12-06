class endereco {
	constructor(nome, logradouro, numero, cep, cidade, estado, pais) {
		this.nome = nome;
		this.logradouro = logradouro;
		this.numero = numero;
		this.cep = cep;
		this.cidade = cidade;
		this.estado = estado;
		this.pais = pais;
	}
}

let clientes = [];
let lojas = [];
let empresas = [];

document
	.getElementById("salvarCliente")
	.addEventListener("click", salvaCliente);
document.getElementById("salvarLoja").addEventListener("click", salvaLoja);
document
	.getElementById("salvarEmpresa")
	.addEventListener("click", salvaEmpresa);

function salvaCliente() {
	let novo = new endereco(
		document.getElementById("nomeCliente").value,
		document.getElementById("logradouroCliente").value,
		document.getElementById("numeroCliente").value,
		document.getElementById("cepCliente").value,
		document.getElementById("cidadeCliente").value,
		document.getElementById("estadoCliente").value,
		document.getElementById("paisCliente").value
	);

	clientes.push(novo);
	localStorage.setItem("clientes", JSON.stringify(clientes));
}

function salvaLoja() {
	let novo = new endereco(
		document.getElementById("nomeLoja").value,
		document.getElementById("logradouroLoja").value,
		document.getElementById("numeroLoja").value,
		document.getElementById("cepLoja").value,
		document.getElementById("cidadeLoja").value,
		document.getElementById("estadoLoja").value,
		document.getElementById("paisLoja").value
	);

	lojas.push(novo);
	localStorage.setItem("lojas", JSON.stringify(lojas));
}

function salvaEmpresa() {
	let novo = new endereco(
		document.getElementById("nomeEmpresa").value,
		document.getElementById("logradouroEmpresa").value,
		document.getElementById("numeroEmpresa").value,
		document.getElementById("cepEmpresa").value,
		document.getElementById("cidadeEmpresa").value,
		document.getElementById("estadoEmpresa").value,
		document.getElementById("paisEmpresa").value
	);

	empresas.push(novo);
	localStorage.setItem("empresas", JSON.stringify(empresas));
}
