// console.log(2 == 2)

// let idade = 11
// console.log(idade >= 18)

// let code = '123'
// console.log(code == 123)


// let code = prompt('Digite sua senha:')
// if (code == '1234') {
//     alert('acesso permitido')
// }else{
//     alert('Senha incorreta, Acesso negado')
// }

// let nota = prompt('Digite a nota: ')
// nota = Number(nota)
// if (nota >= 7) {
//     alert('Aprovado')
// }else if(nota >= 5 && nota < 7){
//     alert('Recuperação')
// }else if(nota == 4){
//     alert('Provão final')  
// }
// else{
//     alert('Reprovado')
// }

// let email = prompt('Digite seu email: ')

// if (email === "teste@gmail.com") {
//     let password = prompt('Digite sua senha: ')
//     password = Number(password)
//     if (password === 1234) {
//         alert('Acesso permitido')
//     } else {
//         alert('Senha incorreta, Acesso negado')
//     }
// } else {
//     alert('Email incorreto ou usuário não cadastrado')
// }

// solicite uma idade ao usuário e verifique se ele é maior de idade (18 anos ou mais)
// let idade = prompt('Digite sua idade: ')
// idade = Number(idade)
// if (idade >= 18) {
//     alert('Você é maior de idade')
// } else {
//     alert('Você é menor de idade')
// }

// solicite um número ao usuário e verifique se ele é par ou ímpar
// let numero = prompt('Digite um número: ')
// numero = Number(numero)
// if (numero % 2 === 0) {
//     alert('O número é par')
// } else {
//     alert('O número é ímpar')
// }

//solicite idade ao usuário, caso seja menor de 2 anos ele paga meia entrada
let idade = prompt('Digite sua idade: ')
idade = Number(idade)
let entrada = 35
idade = Number(idade)
if (idade < 12) {
    alert('Você paga meia entrada')
    alert('O valor da entrada é: R$' + entrada + "\nporem você paga: R$" + (entrada / 2))
} else {
    alert('Você paga entrada inteira')
    alert('O valor da entrada é: ' + entrada)
}