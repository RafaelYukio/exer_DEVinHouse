let clientes = localStorage.getItem("clientes");
clientes = JSON.parse(clientes);

let i = 0;

for (const obj of clientes) {
	let clone = document.getElementsByClassName("cliente")[0].cloneNode(true);

	if (i != 0) {
		document
			.getElementsByClassName("cliente")
			[i - 1].parentNode.insertBefore(
				clone,
				document.getElementsByClassName("cliente")[i - 1].nextSibling
			);
	}

	document.getElementsByClassName("nomeCliente")[i].innerText = obj.nome;
	document.getElementsByClassName("logradouroCliente")[i].innerText =
		obj.logradouro;
	document.getElementsByClassName("numeroCliente")[i].innerText = obj.numero;
	document.getElementsByClassName("cepCliente")[i].innerText = obj.cep;
	document.getElementsByClassName("cidadeCliente")[i].innerText = obj.cidade;
	document.getElementsByClassName("estadoCliente")[i].innerText = obj.estado;
	document.getElementsByClassName("paisCliente")[i].innerText = obj.pais;

	i++;
}

let lojas = localStorage.getItem("lojas");
lojas = JSON.parse(lojas);

i = 0;

for (const obj of lojas) {
	let clone = document.getElementsByClassName("loja")[0].cloneNode(true);

	if (i != 0) {
		document
			.getElementsByClassName("loja")
			[i - 1].parentNode.insertBefore(
				clone,
				document.getElementsByClassName("loja")[i - 1].nextSibling
			);
	}

	document.getElementsByClassName("nomeLoja")[i].innerText = obj.nome;
	document.getElementsByClassName("logradouroLoja")[i].innerText =
		obj.logradouro;
	document.getElementsByClassName("numeroLoja")[i].innerText = obj.numero;
	document.getElementsByClassName("cepLoja")[i].innerText = obj.cep;
	document.getElementsByClassName("cidadeLoja")[i].innerText = obj.cidade;
	document.getElementsByClassName("estadoLoja")[i].innerText = obj.estado;
	document.getElementsByClassName("paisLoja")[i].innerText = obj.pais;

	i++;
}

let empresas = localStorage.getItem("empresas");
empresas = JSON.parse(empresas);

i = 0;

for (const obj of empresas) {
	let clone = document.getElementsByClassName("empresa")[0].cloneNode(true);

	if (i != 0) {
		document
			.getElementsByClassName("empresa")
			[i - 1].parentNode.insertBefore(
				clone,
				document.getElementsByClassName("empresa")[i - 1].nextSibling
			);
	}

	document.getElementsByClassName("nomeEmpresa")[i].innerText = obj.nome;
	document.getElementsByClassName("logradouroEmpresa")[i].innerText =
		obj.logradouro;
	document.getElementsByClassName("numeroEmpresa")[i].innerText = obj.numero;
	document.getElementsByClassName("cepEmpresa")[i].innerText = obj.cep;
	document.getElementsByClassName("cidadeEmpresa")[i].innerText = obj.cidade;
	document.getElementsByClassName("estadoEmpresa")[i].innerText = obj.estado;
	document.getElementsByClassName("paisEmpresa")[i].innerText = obj.pais;

	i++;
}
