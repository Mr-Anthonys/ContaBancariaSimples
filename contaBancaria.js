const contaBancaria = {
    titular: "Anthony",
    saldo: 1000,
    depositar(valor) {
        if (valor <= 0) {
            console.log(`O valor do depósito deve ser maior que zero.`);
        } else {
            this.saldo += valor;
            console.log(`Deposito de R$ ${valor.toFixed(2)} realizado com sucesso.`)
        }
    },
    sacar(valor) {
        if (valor <= 0) {
            console.log(`O valor para saque precisa ser maior que zero.`);
        }
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente! Seu saldo atual é de ${this.saldo}`);
        } else {
            console.log(`Efetuando saque...`);
            this.saldo -= valor;
            console.log(`Deposito de R$ ${valor} efetuado com sucesso.`);
        }
    }
}