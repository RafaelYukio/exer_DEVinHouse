let nomeSobrenome = (nome, sobrenome) => {
	if (!nome) {
		nome = "Jane";
	}
	if (!sobrenome) {
		sobrenome = "Doe";
	}

	return console.log(nome + " " + sobrenome);
};

nomeSobrenome("Teste1", "Teste2");
nomeSobrenome();
