//1°Positivo ou Negativo
// let num = Number(prompt("Digite um número: "))
// if (num > 0) {
//     alert("O número é positivo")
// } else if (num < 0) {
//     alert("O número é negativo")
// } else {
//     alert("O número é zero")
// }

//2°Par ou Ímpar
// let num = Number(prompt("Digite um número: "))
// if (num % 2 === 0) {
//     alert("O número é par")
// } else {
//     alert("O número é ímpar")
// }

//3°Maior idade
// let idade = Number(prompt("Digite sua idade: "))
// if (idade >= 18) {
//     alert("Você é maior de idade")
// } else {
//     alert("Você é menor de idade")
// }

//4°senha acesso
// let senha = prompt("Digite sua senha: ")
// if (senha == "1234") {
//     alert("Acesso permitido")
// } else {
//     alert("Senha incorreta, Acesso negado")
// }

//5°Aprovado ou reprovado
// let nota = Number(prompt("Digite sua nota: "))
// if (nota >= 7) {
//     alert("Aprovado")
// } else {
//     alert("Reprovado")
// }

//6°classificado por nota
// let nota = Number(prompt("Digite sua nota: "))
// if(nota>=9){
//     alert("Excelente")
// }else if(nota>=7){
//     alert("Bom")
// }else if(nota>=5){
//     alert("Regular")
// }else{
//     alert("Reprovado")
// }

//7°Desconto em ingressos
// let idade = Number(prompt("Digite sua idade: "))
// let valorIngresso = 45.00
// if (idade < 12 || idade > 60) {
//     valorIngresso = valorIngresso * 0.5
//     alert(`Você tem direito a meia entrada. O valor do ingresso é R$ ${valorIngresso.toFixed(2)}`)
// }else{
//     alert(`O valor do ingresso é R$ ${valorIngresso.toFixed(2)}`)
// }

//8°calculadora simples
// let num1 = Number(prompt("Digite o primeiro número: "))
// let num2 = Number(prompt("Digite o segundo número: "))
// let operacao = prompt("Digite a operação (+, -, *, /): ")
// switch (operacao) {
//     case "+":
//         alert(`O resultado da soma é: ${num1 + num2}`)
//         break
//     case "-":
//         alert(`O resultado da subtração é: ${num1 - num2}`)
//         break
//     case "*":
//         alert(`O resultado da multiplicação é: ${num1 * num2}`)
//         break
//     case "/":
//         if (num2 !== 0) {
//             alert(`O resultado da divisão é: ${num1 / num2}`)
//         } else {
//             alert("Erro: Divisão por zero não é permitida.")
//         }
//         break
//     default:
//         alert("Operação inválida")
//         break
// }

//9°Numero maior
// let num1 = Number(prompt("Digite o primeiro número: "))
// let num2 = Number(prompt("Digite o segundo número: "))
// if (num1 > num2) {
//     alert(`O maior número é: ${num1}`)
// } else if (num2 > num1) {
//     alert(`O maior número é: ${num2}`)
// } else {
//     alert("Os números são iguais")
// }

//10°Numero maior entre 3
// let num1 = Number(prompt("Digite o primeiro número: "))
// let num2 = Number(prompt("Digite o segundo número: "))
// let num3 = Number(prompt("Digite o terceiro número: "))
// if (num1 >= num2 && num1 >= num3) {
//     alert(`O maior número é: ${num1}`)
// } else if (num2 >= num1 && num2 >= num3) {
//     alert(`O maior número é: ${num2}`)
// } else if (num3 >= num1 && num3 >= num2) {
//     alert(`O maior número é: ${num3}`)
// } else {
//     alert("Os números são iguais")
// }

//11°Numero dentro do intervalo 10 e 50
// let num = Number(prompt("Digite um número: "))
// if (num >= 10 && num <= 50) {
//     alert("O número está dentro do intervalo de 10 a 50")
// } else {
//     alert("O número está fora do intervalo de 10 a 50")
// }

//12°par,impar ou zero
// let num = Number(prompt("Digite um número: "))
// if (num % 2 == 0 && num != 0) {
//     alert("O número é par")
// } else if (num % 2 != 0 && num != 0) {
//     alert("O número é ímpar")
// } else if (num == 0) {
//     alert("O número é zero")
// }

//13°Classificação por idade
// let temp = Number(prompt("Digite a temperatura em °C: "))
// if (temp <= 0) {
//     alert("Muito frio")
// } else if (temp > 0 && temp <= 20) {
//     alert("Frio")
// } else if (temp > 20 && temp <= 30) {
//     alert("Agradável")
// } else if(temp > 30){
//     alert("Quente")
// }

//14° Classificação etária
// let idade = Number(prompt("Digite sua idade: "))
// if(idade >=0 && idade <=12){
//     alert("Criança")
// }else if(idade >=13 && idade <=17){
//     alert("Adolescente")
// }else if(idade >=18 && idade <=59){
//     alert("Adulto")
// }else if(idade >=60){
//     alert("Idoso")
// }

//15° validação login
// let username = prompt("Digite seu nome de usuário: ")
// if (username === "admin") {
//     let password = prompt("Digite sua senha: ")
//     if (password === "123") {
//         alert("Bem-vindo, admin!")
//     } else {
//         alert("Senha incorreta.")
//     }
// } else {
//     alert("Usuário incorreto.")
// }

// let username = prompt("Digite seu nome de usuário: ")
// let password = prompt("Digite sua senha: ")

// if (username === "admin") {
//     if (password === "123") {
//         alert("Bem-vindo, admin!")
//     } else {
//         alert("Senha incorreta.")
//     }
// } else {
//     alert("Usuário ou senha incorreta.")
// }

//16° mes do ano
// let mes = Number(prompt("Digite um número de 1 a 12 e te direi qual mês é: "))
// switch(mes){
//     case 1:
//         alert("Janeiro")
//         break
//     case 2:
//        alert("Fevereiro")
//         break
//     case 3:
//         alert("Março")
//         break
//     case 4:
//         alert("Abril")
//         break
//     case 5:
//         alert("Maio")
//         break
//     case 6:
//         alert("Junho")
//         break
//     case 7:
//         alert("Julho")
//         break
//     case 8:
//         alert("Agosto")
//         break
//     case 9:
//         alert("Setembro")
//         break
//     case 10:
//         alert("Outubro")
//         break
//     case 11:
//         alert("Novembro")
//         break
//     case 12:
//         alert("Dezembro")
//         break
//     default:
//         alert("Número inválido")
//         break
// }

//17° dia da semana
// let dia = Number(prompt("Digite um número de 1 a 7 e te direi qual dia da semana é: "))
// switch(dia){
//     case 1:
//         alert("Domingo")
//         break
//     case 2:
//        alert("Segunda-feira")
//         break
//     case 3:
//         alert("Terça-feira")
//         break
//     case 4:
//         alert("Quarta-feira")
//         break
//     case 5:
//         alert("Quinta-feira")
//         break
//     case 6:
//         alert("Sexta-feira")
//         break
//     case 7:
//         alert("Sábado")
//         break
//     default:
//         alert("Número inválido")
//         break
// }

//18°TRiangulo válido
// let a = Number(prompt("Digite o valor do lado A: "))
// let b = Number(prompt("Digite o valor do lado B: "))
// let c = Number(prompt("Digite o valor do lado C: "))

// if(a < b + c && b < a + c && c < a + b){
//     alert("Os lados formam um triângulo válido")
// }else{
//     alert("Os lados não formam um triângulo válido")
// }

//19°Categoria de IMC
// let peso = Number(prompt("Digite seu peso em kg: "))
// let altura = Number(prompt("Digite sua altura em metros: "))
// let imc = peso / (altura * altura)

// if(imc < 18.5){
//     alert("Abaixo do peso")
// }else if(imc >= 18.5 && imc < 25){
//     alert("Peso normal")
// }else if(imc >= 25 && imc < 30){
//     alert("Sobrepeso")
// }else if(imc >= 30 ){
//     alert("Obesidade")
// }else{
//     alert("Valor inválido")
// }

//20°Notas em letras
// let nota = Number(prompt("Digite sua nota de 0 a 100: "))
// if(nota >= 90 ){
//     alert("A")
// } else if(nota >= 80 && nota < 90){
//     alert("B")
// } else if(nota >= 70 && nota < 80){
//     alert("C")
// } else if(nota >= 60 && nota < 70){
//     alert("D")
// } else if(nota < 60){
//     alert("E")
// } else{
//     alert("Valor inválido")
// }

//21°Adiviação numero
// let num = Number(prompt("Digite um número de 1 a 5: "))
// let numSecreto = Math.floor(Math.random() * (5 - 1) + 1)

// if(num === numSecreto){
//     alert("Você acertou! ")
// }
// else{
//     alert("Você errou! o numero secreto é " + numSecreto)
// }