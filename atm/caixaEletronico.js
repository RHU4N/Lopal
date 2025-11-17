readline = require('readline-sync');
let valorConta = 1500;
let i = 0;
let statusLog = "deslogado";
let ope = -1;
let user;
let senha;

console.log("=== Caixa Eletrônico Simples ===");


function login(usuario, senha) {
  if (!usuario || !senha) {
    throw new Error("Usuário e senha são obrigatórios.");
  } else if (typeof usuario !== "string" || typeof senha !== "string") {
    throw new Error("Usuário e senha devem ser strings.");
  } else if (usuario.length < 5 || senha.length < 5) {
    throw new Error("Usuário e senha devem ter pelo menos 5 caracteres.");
  } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(usuario)) {
    throw new Error("Usuário deve estar no formato de CPF: xxx.xxx.xxx-xx");
  } else {
    const cpfValido = "123.456.789-00";
    const senhaValida = "senha123";
    if (usuario === cpfValido && senha === senhaValida) {
      console.log("Login bem-sucedido! Acessando conta...");
      return true;
    } else {
      throw new Error("Usuário ou senha inválidos.");
    }
  }
}

function ConsultarSaldo() {
  console.log("Seu saldo é R$ " + valorConta.toFixed(2));
}

function sacar(valor) {
  if (valor <= 0) {
    throw new Error("O valor do saque deve ser maior que zero.");
  }
  else if (valor > valorConta) {
    throw new Error("Saldo insuficiente para este saque.");
  } else {
    valorConta -= valor;
    console.log("Saque de R$ " + valor.toFixed(2) + " realizado com sucesso.");
  }
}

function operacoesDisponiveis() {
        console.log("\nOperações disponíveis:");
        console.log("1 - Consultar saldo");
        console.log("2 - Saque");
        console.log("3 - Depósito");
        console.log("4 - Transferência");
        console.log("5 - Extrato");
        console.log("6 - Pagar conta");
        console.log("0 - Sair");
        let entrada = readline.question("Escolha a operação desejada: ");
        entrada = entrada.trim();

        // valida inteiro e converte
        if (!/^\d+$/.test(entrada)) {
          console.log("Entrada inválida. Digite um número de 0 a 6.");
          return; // sai da função e retorna ao loop
        }

        ope = parseInt(entrada, 10);

        // valida intervalo permitido
        if (ope < 0 || ope > 6) {
          console.log("Operação inválida. Escolha entre 0 e 6.");
          return;
        }
        switch (ope) {
            case 1:
                ConsultarSaldo();
                break;
            case 2:
                sacar(200);
                break;
            case 3:
                console.log("Depósito realizado com sucesso.");
                break;
            case 4:
                console.log("Transferência realizada com sucesso.");
                break;
            case 5:
                console.log("Exibindo extrato...");
                break;
            case 6:
                console.log("Conta paga com sucesso.");
                break;
            case 0:
                console.log("Saindo...");
                break;
            default:
                console.log("Operação inválida.");
        }
}

while(i <= 2) {
  try {
    user = readline.question("Digite o usuário (CPF no formato xxx.xxx.xxx-xx): ");
    senha = readline.question("Digite a senha: ", { hideEchoBack: true });

    if (i === 2) {
      throw new Error("Número máximo de tentativas excedido.");
    }
    if(login(user, senha)){
        statusLog = "logado";
        console.log("Acesso concedido.");
        break;
    }

  } catch (err) {
    console.error("Erro no login:", err.message);
  } finally {
    // finally sempre executa após try/catch; útil para log/limpeza
    console.log(`Tentativa ${i + 1} finalizada.`);
  }
  i++;
}


while(ope != 0 && statusLog === "logado"){
  try {
    operacoesDisponiveis();
    
  } catch (err) {
    console.error("Erro na operação:", err.message);
  } finally {
    console.log("Operação encerrada.");
  }
}
