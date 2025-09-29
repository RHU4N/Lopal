// mostrar numeros de 1 a 10
console.log("Números de 1 a 10:")
for(let i = 1;i<=10;i++){
    console.log(i)
}
// mostrar numeros pares de 2 a 20
let con = 2
console.log("Números pares de 2 a 20:")
while(con <=20){
    if(con % 2 == 0){
        console.log(con)
    }
    con++
}
//digite a senha correta
console.log("Digite a senha correta:")
do {
    let senha = prompt("Digite a senha:");
    if (senha != "1234") {
        alert("Senha incorreta. Tente novamente.");
        console.log("Senha incorreta. Tente novamente.");
    }
    else {
        alert("Senha correta. Acesso concedido.");
        console.log("Senha correta. Acesso concedido.");
    }
} while (senha != "1234");
