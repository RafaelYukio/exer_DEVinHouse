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

class cliente {
	constructor(nome, cpf, endereco, nCelular) {
		this.nome = nome;
		this.cpf = cpf;
		this.endereco = endereco;
		this.nCelular = nCelular;
	}
}

let clientes = [];

document.getElementById("salvarDadosCliente").addEventListener("click", salvar);

function salvar() {
	let endCliente = salvaCliente();
	let endLoja = salvaLoja();
	let endEmpresa = salvaEmpresa();
	clientes.push(salvaDadosCliente(endCliente, endLoja, endEmpresa));

	localStorage.setItem("clientes", JSON.stringify(clientes));
}

function salvaDadosCliente(endCliente, endLoja, endEmpresa) {
	let novo = new cliente(
		document.getElementById("nomeDadosCliente").value,
		document.getElementById("cpfDadosCliente").value,
		[endCliente, endLoja, endEmpresa],
		document.getElementById("celularDadosCliente").value
	);

	return novo;
}

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

	return novo;
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

	return novo;
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

	return novo;
}
