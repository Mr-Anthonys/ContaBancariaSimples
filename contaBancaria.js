import inquirer from 'inquirer';


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

const clienteX = {
    titular: "Anthony",
    conta: contaBancaria
}


function exibirMenu(){
    console.log("\nEscolha uma opção:");
    console.log("1. Ver saldo");
    console.log("2. Fazer um saque");
    console.log("3. Fazer um depósito");
    console.log("4. Sair");
}

function getInteracao() {
    exibirMenu();
    rl.question("Digite sua escolha: ", (escolha) => {
        switch (escolha) {
            case "1":
                mostrarSaldo(clienteX);
                break;
            case "2":
                efetuarSaque(clienteX);
                break;
            case "3":
                efetuarDeposito(clienteX)
                break;
            case "4":
                console.log("Finalizando operacao.");
                rl.close;
                break;
            default:
                console.log("Opção inválida. Por favor, tente novamente.");
                getInteracao();
        }
    })
}


console.log("Bem-vindo ao sistema bancario!");
getInteracao();