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
// let operacao = prompt("Digite a operação (+, -, *, /): "))
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

//13°Conversão de temperatura
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
// let username = prompt("Digite seu nome de usuário: ").trim()
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

// let username = prompt("Digite seu nome de usuário: ").trim()
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
// let altura = Number(prompt("Digite sua altura em metros: ").replace(",","."))
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

//22 Dia util ou fim de semana
// let dia = Number(prompt("Digite um número de 1 a 7 e te direi se é dia um dia util da semana ou fim de semana:\n1-Domingo \n2-Segunda-feira \n3-Terça-feira \n4-Quarta-feira \n5-Quinta-feira \n6-Sexta-feira \n7-Sábado"))
// if(dia >=2 && dia <=5){
//     alert("Dia útil")
// }else if(dia === 6 || dia === 1){
//     alert("Fim de semana")
// }else{
//     alert("Número inválido")
// }

// 23 preço com desconto
// let preco = Number(prompt("Digite o preço do produto: "))
// let formaPag = Number(prompt("Digite a forma de pagamento:\n1 - À vista em dinheiro ou PIX (10% de desconto)\n2 - À vista no cartão (5% de desconto)\n3 - Em Parcelado (preço normal)"))

// if(formaPag === 1){
//     preco -= preco * 10/100
//     alert("Preço com desconto: " + preco)
// }else if(formaPag === 2){
//     preco -= preco*5/100
//     alert("Preço com desconto: " + preco)
// }else if(formaPag === 3){
//     alert("Preço normal: " + preco)
// }else{
//     alert("Forma de pagamento inválida")
// }

//24 Faixa de velocidade
// let vel = Number(prompt("Digite a velocidade do carro em km/h: "))
// if(vel <= 60){
//     alert("Velocidade dentro do limite.")
// }else if(vel > 60 && vel <= 80){
//     alert("Velocidade de atenção.")
// }else if(vel>80){
//     alert("Multado por excesso de velocidade.")
// }

// 25 Eleitor Obrigatório
// let idade = Number(prompt("Digite sua idade: "))
// if(idade < 16){
//     alert("Não eleitor")
// }else if(idade >= 16 && idade < 18 || idade >= 70){
//     alert("Eleitor facultativo")
// }else if(idade >= 18 && idade < 70){
//     alert("Eleitor obrigatório")
// }

// 26 Categoria prod
// let categoria = Number(prompt("Digite a categoria do produto:\n1 - Alimento\n2 - Vestuario\n3 - Eletronico"))
// if(categoria === 1){
//     alert("Categoria: Alimento")
// }else if(categoria === 2){
//     alert("Categoria: Vestuario")
// }else if(categoria === 3){
//     alert("Categoria: Eletronico")
// }
// else{
//     alert("Categoria inválida")
// }

// 27 Preco frete
// let dist = Number(prompt("Digite a distância em km para o frete: "))
// if(dist <= 50){
//     alert("Frete R$10,00")
// }else if(dist > 50 && dist <= 100){
//     alert("Frete R$20,00")
// }else if(dist > 100){
//     alert("Frete R$50,00")
// }
// else{
//     alert("Frete grátis")
// }

// 28 calculadora de média
// let n1 = Number(prompt("Digite a primeira nota: "))
// let n2 = Number(prompt("Digite a segunda nota: "))
// let n3 = Number(prompt("Digite a terceira nota: "))
// let media = (n1 + n2 + n3) / 3
// if(media >= 7){
//     alert("Aprovado")
// }else if(media >= 5 && media < 7){
//     alert("Recuperação")
// }else if(media < 5){
//     alert("Reprovado")
// }

// 29 Loja de lanches
// let lanche = prompt("Digite o lanche desejado:\n1 - Hambúrguer \n2 - Pizza \n3 - Salada ")
// if(lanche == "1"){
//     alert("Você escolheu Hambúrguer")
// }else if(lanche == "2"){
//     alert("Você escolheu Pizza")
// }else if(lanche == "3"){
//     alert("Você escolheu Salada")
// }else{
//     alert("Opção inválida")
// }

//30 Jogo pedra, papel e tesoura
// let jogador1 = prompt("Jogador1 - Escolha: \n1-pedra \n2-papel  \n3-tesoura ").toLowerCase()
// let jogador2 = Math.random().toFixed(0) * (3 - 1) + 1
// let jogador2escolha = ""
// if(jogador2 === 1){
//     jogador2escolha = "pedra"
// }else if(jogador2 === 2){
//     jogador2escolha = "papel"
// }else if(jogador2 === 3){
//     jogador2escolha = "tesoura"
// }
// if(jogador1 === "1" || jogador1 === "2" || jogador1 === "3"){
//     if((jogador1 === "1" && jogador2 === 3) || (jogador1 === "2" && jogador2 === 1) || (jogador1 === "3" && jogador2 === 2)){
//         alert("Jogador 1 venceu! Jogador 2 escolheu: " + jogador2escolha)
//     }else if((jogador1 === "1" && jogador2 === 2) || (jogador1 === "2" && jogador2 === 3) || (jogador1 === "3" && jogador2 === 1)){
//         alert("Jogador 2 venceu! Jogador 2 escolheu: " + jogador2escolha)
//     }else{
//         alert("Empate! Jogador 2 escolheu: " + jogador2escolha)
//     }
// }
