class transacoes {
	constructor(valorDaTransacao) {
		this.conta = 500;
		this.valorDaTransacao = valorDaTransacao;
	}

	transferencia() {
		this.conta = this.conta - this.valorDaTransacao;
		console.log(this.conta);
	}

    deposito() {
		this.conta = this.conta + this.valorDaTransacao;
		console.log(this.conta);
    }
}