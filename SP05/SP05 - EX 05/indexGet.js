let clientes = localStorage.getItem("clientes");
clientes = JSON.parse(clientes);

let i = 0;

for (obj of clientes) {
	let cloneDadosCliente = document
		.getElementsByClassName("dadosCliente")[0]
		.cloneNode(true);
	let cloneCliente = document
		.getElementsByClassName("cliente")[0]
		.cloneNode(true);
	let cloneLoja = document.getElementsByClassName("loja")[0].cloneNode(true);
	let cloneEmpresa = document
		.getElementsByClassName("empresa")[0]
		.cloneNode(true);

	if (i != 0) {
		document
			.getElementsByClassName("dadosCliente")
			[i - 1].parentNode.insertBefore(
				cloneDadosCliente,
				document.getElementsByClassName("dadosCliente")[i - 1].nextSibling
			);
		document
			.getElementsByClassName("cliente")
			[i - 1].parentNode.insertBefore(
				cloneCliente,
				document.getElementsByClassName("cliente")[i - 1].nextSibling
			);
		document
			.getElementsByClassName("loja")
			[i - 1].parentNode.insertBefore(
				cloneLoja,
				document.getElementsByClassName("loja")[i - 1].nextSibling
			);
		document
			.getElementsByClassName("empresa")
			[i - 1].parentNode.insertBefore(
				cloneEmpresa,
				document.getElementsByClassName("empresa")[i - 1].nextSibling
			);
	}

	document.getElementsByClassName("nomeDadosCliente")[i].innerText = obj.nome;
	document.getElementsByClassName("cpfDadosCliente")[i].innerText = obj.cpf;
	document.getElementsByClassName("celularDadosCliente")[i].innerText =
		obj.nCelular;

	document.getElementsByClassName("nomeCliente")[i].innerText =
		obj.endereco[0].nome;
	document.getElementsByClassName("logradouroCliente")[i].innerText =
		obj.endereco[0].logradouro;
	document.getElementsByClassName("numeroCliente")[i].innerText =
		obj.endereco[0].numero;
	document.getElementsByClassName("cepCliente")[i].innerText =
		obj.endereco[0].cep;
	document.getElementsByClassName("cidadeCliente")[i].innerText =
		obj.endereco[0].cidade;
	document.getElementsByClassName("estadoCliente")[i].innerText =
		obj.endereco[0].estado;
	document.getElementsByClassName("paisCliente")[i].innerText =
		obj.endereco[0].pais;

	document.getElementsByClassName("nomeLoja")[i].innerText =
		obj.endereco[1].nome;
	document.getElementsByClassName("logradouroLoja")[i].innerText =
		obj.endereco[1].logradouro;
	document.getElementsByClassName("numeroLoja")[i].innerText =
		obj.endereco[1].numero;
	document.getElementsByClassName("cepLoja")[i].innerText = obj.endereco[1].cep;
	document.getElementsByClassName("cidadeLoja")[i].innerText =
		obj.endereco[1].cidade;
	document.getElementsByClassName("estadoLoja")[i].innerText =
		obj.endereco[1].estado;
	document.getElementsByClassName("paisLoja")[i].innerText =
		obj.endereco[1].pais;

	document.getElementsByClassName("nomeEmpresa")[i].innerText =
		obj.endereco[2].nome;
	document.getElementsByClassName("logradouroEmpresa")[i].innerText =
		obj.endereco[2].logradouro;
	document.getElementsByClassName("numeroEmpresa")[i].innerText =
		obj.endereco[2].numero;
	document.getElementsByClassName("cepEmpresa")[i].innerText =
		obj.endereco[2].cep;
	document.getElementsByClassName("cidadeEmpresa")[i].innerText =
		obj.endereco[2].cidade;
	document.getElementsByClassName("estadoEmpresa")[i].innerText =
		obj.endereco[2].estado;
	document.getElementsByClassName("paisEmpresa")[i].innerText =
		obj.endereco[2].pais;

	i++;
}
