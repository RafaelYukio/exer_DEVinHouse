class produto {
	constructor(nome, imagem, valor, maxParcelas) {
		this.nome = nome;
		this.imagem = imagem;
		this.valor = valor;
		this.maxParcelas = maxParcelas;
	}
}

let imgLaranja =
	"https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
let imgMaca =
	"https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
let imgBanana =
	"https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";
let imgUva =
	"https://images.unsplash.com/photo-1616840385576-3c3f252817aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

let laranja = new produto("Laranja", imgLaranja, 1, 2);
let maca = new produto("Maçã", imgMaca, 3, 3);
let banana = new produto("Banana", imgBanana, 2, 2);
let uva = new produto("Uva", imgUva, 6, 5);

function mostrarProduto(produto) {
	let div = document.createElement("div");
	let img = document.createElement("img");
	let span1 = document.createElement("span");
	let span2 = document.createElement("span");
	let span3 = document.createElement("span");
	let select = document.createElement("select");

	for (i = 0; i < produto.maxParcelas; i++) {
		let options = document.createElement("option");
		options.value = i + 1;
		options.innerHTML = i + 1;
		select.appendChild(options);
	}

	img.src = produto.imagem;
	img.height = "500";

	span1.innerText = produto.nome;
	span2.innerText = "Preço: R$ " + produto.valor;
	span3.innerText = "Parcelas: ";

	div.appendChild(img);
	div.appendChild(span1);
	div.appendChild(span2);
	div.appendChild(span3);
	div.appendChild(select);
	document.body.appendChild(div);
}

mostrarProduto(laranja);
mostrarProduto(maca);
mostrarProduto(banana);
mostrarProduto(uva);
