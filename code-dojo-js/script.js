// console.log("Funcionou...")

// conversão de temperatura 
// let temp = Number(prompt("Digite a temperatura"))
// let result = temp * 1.8 + 32
// console.log (`Fahrenheit : ${result}`)

// calculadora de idade 
// let anoN = Number(prompt("Digite o ano que voce nasceu"))
// let anoA = 2025 
// let idade = anoA - anoN 
// console.log(`sua idade : ${idade}`)
// if(idade >= 18){
//     console.log("Você é maior de idade")
// }else{
//     console.log("Você é menor de idade")
// }

// Soma simples
let a = Number(prompt("Digite o primeiro valor")), b = Number(prompt("Digite o segundo valor")), resultado = a + b
console.log(resultado)

// media escola 

// let nota1 = Number(prompt("digite a nota: "))
// let nota2 = Number(prompt("digite a nota: "))
// let nota3 = Number(prompt("digite a nota: "))
// let med = (nota1 + nota2 + nota3 )/ 3
// console.log (med)
// let resultado = med >= 7
// console.log(`Sua aprovação é: ${resultado}`)

// Par ou impar
// let num=Number(prompt("Digite um numero"))
// if(num % 2 == 0){
//     console.log("È par")
// }else{
//         console.log("È impar")
// }

// Senha
// let senhaT = prompt("Digite sua senha")
// let senha = 1234
// if(senha == senhaT){
//     console.log("Acesso permitido")
// }else{
//     console.log("Acesso Negado")
// }

// Maior numero
// let n1 = Number(prompt("Digite um numero:")), n2 = Number(prompt("Digite outro numero:"))
// if(n1>n2){
//     console.log(`O valor ${n1} é maior que ${n2}`)
// }else{
//     console.log(`O valor ${n2} é maior que ${n1}`)
// }

// conversão de moedas
// let real = Number(prompt("Digite o valor em R$:"))
// let conversao = real * 5 
// console.log (`o valor em real é ${real } convertido em dolar é ${conversao}`)

// velocidade media 
// let Vi = Number (prompt("Digite a velocidade inicial"))
// let Vf = Number (prompt("Digite a velocidade Final"))
// let Ti = Number (prompt("Digite o tempo inicial"))
// let Tf = Number(prompt("Digite o tmpo final"))
// let Vm = (Vf - Vi) / (Tf - Ti)
// console.log (`A velocidade média : ${Vm}`)

// Desconto de compras 
// let valor = Number(prompt("valor da compra"))
// if(valor>=100){ 
//     let porcento = (valor * 0.10)
//     console.log(`o valor a pagar com 10% de desconto é : ${valor - porcento}`)
// }
// else{console.log("o valor a pagar é" + valor)}

// Comparação de Números
// let a = Number(prompt("Digite o primeiro valor")), b = Number(prompt("Digite o segundo valor"))
// if (a != b){
//     console.log("Os valores são diferentes")
// }else{
//     console.log("Os valores são iguais")
// }

// Conversão de minutos em horas
// let min = Number(prompt(" digite o minuto: "))
// let hora = 60
// let result = min/hora
// console.log (`a quatidade de minutos em ${min} e igual a ${result} horas`)


// Tabuada simples
// let num= Number(prompt("Digite valor"))
// console.log("Tabuado do "+ num)
// for(let i = 0; i <= 10; i++){
//     console.log(`${num} X ${i} = ${num*i}`)
// }

// Imc simpleficado
// let kg = Number(prompt("Qual é seu peso em kg"))
// let alt = Number(prompt("Qual é sua altura em m"))
// let imc = kg/alt**2
// console.log(`Seu imc é ${imc}, já que sua altura é ${alt}m e seu peso ${kg}kg`)

// numero positivo ou negetivo
// let num = Number(prompt("digite um numero:"))
// if(num<0){
//      console.log("É e negativo")
// }else if(num == 0){
//     console.log("e zero")
// }else{
//     console.log ("e positivo")
// }

// aprovado ou reprovado 
// let n1 = Number(prompt("digite a primeira nota"))
// let n2 = Number(prompt("digite a segunda nota"))
// let media = (n1 + n2) / 2 
// if (media >= 7 ) {
//     console.log(`Você foi aprovado, sua nota foi ${media}`)
// }else if (media >=5 && media <=7)
// {
//     console.log("recuperação")
// } else {
//     console.log ("reprovado")
// }

// preço do ingresso 
// let idade = Number(prompt(" qual a sua idade"))
// if(idade < 12){
//     console.log(" voce tem que pagar 10 reais no ingresso")
// } else if(idade >= 12 && idade <= 17){
//     console.log(" voce tem que pagar 15 reais no ingresso")
// } else {
//     console.log(" voce tem que pagar 20 reais no ingresso")
// }

// calculadora
// let n1 = Number(prompt("digite o primeiro valor"))
// let n2 = Number(prompt("digite o segundo valor"))
// let ope = prompt("escolha a operação: \n + mais \n - menos \n * multiplicação \n / divisão")

// if(ope == "+"){
//     console.log(n1 + n2)
// } else if (ope == "-"){
//     console.log(n1 - n2)
// }else if(ope == "*"){
//     console.log(n1 * n2)
// }else if(ope == "/"){
//     console.log(n1 / n2)
// }

// Boas vindas personalizadas
// let nome = prompt("Qual o seu nome?")
// console.log("Seja bem vindo, " + nome)