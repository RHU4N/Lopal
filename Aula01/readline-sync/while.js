const readline = require('readline-sync');

//senha
while (true) {
    let senha = readline.question("Digite a senha:");
    if (senha === "1234") {
        console.log("Senha correta. Acesso concedido.");
        break;
    }
    else {
        console.log("Senha incorreta. Tente novamente.");
    }
}