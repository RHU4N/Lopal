//1- Dia da semana
// let dia = prompt("Digite um número de 1 a 7 para saber o dia da semana correspondente:");
// switch(dia) {
//     case '1':
//         console.log("Domingo");
//         break;
//     case '2':
//         console.log("Segunda-feira");
//         break;
//     case '3':
//         console.log("Terça-feira");
//         break;
//     case '4':
//         console.log("Quarta-feira");
//         break;
//     case '5':
//         console.log("Quinta-feira");
//         break;
//     case '6':
//         console.log("Sexta-feira");
//         break;
//     case '7':
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Número inválido! Por favor, insira um número entre 1 e 7.");
// }

// 2- Cores
// let cor = prompt("Digite o nome de uma cor (vermelho, azul, amarelo):").toLowerCase();
// switch(cor) {
//     case 'vermelho':
//         console.log("A cor repesenta amor,raiva ,paixão");
//         break;
//     case 'azul':
//         console.log("A cor repesenta tranquilidade, serenidade e harmonia.");
//         break;
//     case 'amarelo':
//         console.log("A cor repesenta alegria, otimismo e energia.");
//         break;
//     default:
//         console.log("Cor inválida! Por favor, escolha entre vermelho, azul ou amarelo.");
//         break;
// }

//3 meses do ano
// let mes = prompt("Digite o número do mês (1-12):");
// switch(mes) {
//     case '1':
//         console.log("Janeiro");
//         break;
//     case '2':
//         console.log("Fevereiro");
//         break;
//     case '3':
//         console.log("Março");
//         break;
//     case '4':
//         console.log("Abril");
//         break;
//     case '5':
//         console.log("Maio");
//         break;
//     case '6':
//         console.log("Junho");
//         break;
//     case '7':
//         console.log("Julho");
//         break;
//     case '8':
//         console.log("Agosto");
//         break;
//     case '9':
//         console.log("Setembro");
//         break;
//     case '10':
//         console.log("Outubro");
//         break;
//     case '11':
//         console.log("Novembro");
//         break;
//     case '12':
//         console.log("Dezembro");
//         break;
//     default:
//         console.log("Número inválido! Por favor, insira um número entre 1 e 12.");
//         break;
// }

//4 - Operações matemáticas
// let num1 = Number(prompt("Digite o primeiro número:"));
// let num2 = Number(prompt("Digite o segundo número:"));
// let operacao = prompt("Digite a operação desejada (+, -, *, /):");

// switch(operacao) {
//     case '+':
//         console.log(`Resultado: ${num1 + num2}`);
//         break;
//     case '-':
//         console.log(`Resultado: ${num1 - num2}`);
//         break;
//     case '*':
//         console.log(`Resultado: ${num1 * num2}`);
//         break;
//     case '/':
//         if (num2 !== 0) {
//             console.log(`Resultado: ${num1 / num2}`);
//         } else {
//             console.log("Erro: Divisão por zero não é permitida.");
//         }
//         break;
//     default:
//         console.log("Operação inválida! Por favor, escolha entre +, -, * ou /.");
//         break;
// }

//5 Nota escolar
// let nota = prompt("Digite a nota (A, B, C, D, F):").toUpperCase();
// switch(nota) {
//     case 'A':
//         console.log("Excelente");
//         break;
//     case 'B':
//         console.log("Bom");
//         break;
//     case 'C':
//         console.log("Regular");
//         break;
//     case 'D':
//         console.log("Ruim");
//         break;
//     case 'F':
//         console.log("Reprovado");
//         break;
//     default:
//         console.log("Nota inválida! Por favor, insira uma nota entre A e F.");
//         break;
// }

//6 frutas
// let fruta = prompt("Digite o nome de uma fruta (maçã, banana, laranja):").toLowerCase();
// switch(fruta) {
//     case 'maçã':
//         console.log("Maçã: R$ 2/kg.");
//         break;
//     case 'banana':
//         console.log("Banana: R$ 5/kg.");
//         break;
//     case 'laranja':
//         console.log("Laranja: R$ 1.80/kg.");
//         break;
//     default:
//         console.log("Produto não disponível.");
//         break;
// }

//7 tueno de estudo
// let turno = prompt("Digite o turno que você estuda (M-matutino, V-Vespertino, N-Noturno):").toUpperCase();
// switch(turno) {
//     case 'M':
//         console.log("Matutino");
//         break;
//     case 'V':
//         console.log("Vespertino");
//         break;
//     case 'N':
//         console.log("Noturno");
//         break;
//     default:
//         console.log("Turno inválido! Por favor, insira M, V ou N.");
//         break;
// }

//8 - categoria de idade
// let idade = Number(prompt("Digite sua idade:"));
// switch(true) {
//     case (idade >= 0 && idade <= 12):
//         console.log("Criança");
//         break;
//     case (idade >= 13 && idade <= 17):
//         console.log("Adolescente");
//         break;
//     case (idade >= 18 && idade <= 59):
//         console.log("Adulto");
//         break;
//     case (idade >= 60):
//         console.log("Idoso");
//         break;
//     default:
//         console.log("Idade inválida!");
//         break;
// }

//9 - estação do ano
// let estacao = prompt("Digite o número da estação (1-4) para saber a estação do ano:");
// switch(estacao) {
//     case '1':
//         console.log("Verão");
//         break;
//     case '2':
//         console.log("Outono");
//         break;
//     case '3':
//         console.log("Inverno");
//         break;
//     case '4':
//         console.log("Primavera");
//         break;
//     default:
//         console.log("Estação inválida! Por favor, insira um número entre 1 e 4.");
//         break;
// }

//10 - Cardapio
let prato = prompt("Digite o número do prato desejado (1-5)\n1- Pizza\n2- Hambúrguer\n3- Salada\n4- Massa\n5- Sopa:");
switch(prato) {
    case '1':
        console.log("Prato 1: Pizza");
        break;
    case '2':
        console.log("Prato 2: Hambúrguer");
        break;
    case '3':
        console.log("Prato 3: Salada");
        break;
    case '4':
        console.log("Prato 4: Massa");
        break;
    case '5':
        console.log("Prato 5: Sopa");
        break;
    default:
        console.log("Prato inválido! Por favor, insira um número entre 1 e 5.");
        break;
}