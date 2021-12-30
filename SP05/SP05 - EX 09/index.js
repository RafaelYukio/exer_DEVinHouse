class transacoes {
	constructor(numeroDaConta, valorDaTransacao) {
		this.númeroDaConta = numeroDaConta;
		this.valorDaTransacao = valorDaTransacao;
		this.conta = 500;
		this.idDeTransferencia = 0;
		this.data;
	}

	transferencia(contaATransferir) {
		this.conta = this.conta - this.valorDaTransacao;
		this.idDeTransferencia++;
		console.log("Valor em conta: " + this.conta);
		console.log("ID de tranferência: " + this.idDeTransferencia);
		console.log("Valor transferido para conta: " + contaATransferir);
	}

	deposito() {
		this.conta = this.conta + this.valorDaTransacao;
		this.idDeTransferencia++;
		console.log("Valor em conta: " + this.conta);
		console.log("ID de tranferência: " + this.idDeTransferencia);
	}
}