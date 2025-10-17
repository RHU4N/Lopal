//1- Dia da semana
function diaDaSemana() {
  let dia = prompt(
    "Digite um número de 1 a 7 para saber o dia da semana correspondente:"
  );
  switch (dia) {
    case "1":
      alert("Domingo");
      break;
    case "2":
      alert("Segunda-feira");
      break;
    case "3":
      alert("Terça-feira");
      break;
    case "4":
      alert("Quarta-feira");
      break;
    case "5":
      alert("Quinta-feira");
      break;
    case "6":
      alert("Sexta-feira");
      break;
    case "7":
      alert("Sábado");
      break;
    default:
      alert("Número inválido! Por favor, insira um número entre 1 e 7.");
  }
}

// 2- Cores
function cores() {
  let cor = prompt(
    "Digite o nome de uma cor (vermelho, azul, amarelo):"
  ).toLowerCase();
  switch (cor) {
    case "vermelho":
      alert("A cor repesenta amor,raiva ,paixão");
      break;
    case "azul":
      alert("A cor repesenta tranquilidade, serenidade e harmonia.");
      break;
    case "amarelo":
      alert("A cor repesenta alegria, otimismo e energia.");
      break;
    default:
      alert(
        "Cor inválida! Por favor, escolha entre vermelho, azul ou amarelo."
      );
      break;
  }
}

//3 meses do ano
function mesesDoAno() {
  let mes = prompt("Digite o número do mês (1-12):");
  switch (mes) {
    case "1":
      alert("Janeiro");
      break;
    case "2":
      alert("Fevereiro");
      break;
    case "3":
      alert("Março");
      break;
    case "4":
      alert("Abril");
      break;
    case "5":
      alert("Maio");
      break;
    case "6":
      alert("Junho");
      break;
    case "7":
      alert("Julho");
      break;
    case "8":
      alert("Agosto");
      break;
    case "9":
      alert("Setembro");
      break;
    case "10":
      alert("Outubro");
      break;
    case "11":
      alert("Novembro");
      break;
    case "12":
      alert("Dezembro");
      break;
    default:
      alert("Número inválido! Por favor, insira um número entre 1 e 12.");
      break;
  }
}

//4 - Operações matemáticas
function operacoesMatematicas() {
  let num1 = Number(prompt("Digite o primeiro número:"));
  let num2 = Number(prompt("Digite o segundo número:"));
  let operacao = prompt("Digite a operação desejada (+, -, *, /):");

  switch (operacao) {
    case "+":
      alert(`Resultado: ${num1 + num2}`);
      break;
    case "-":
      alert(`Resultado: ${num1 - num2}`);
      break;
    case "*":
      alert(`Resultado: ${num1 * num2}`);
      break;
    case "/":
      if (num2 !== 0) {
        alert(`Resultado: ${num1 / num2}`);
      } else {
        alert("Erro: Divisão por zero não é permitida.");
      }
      break;
    default:
      alert("Operação inválida! Por favor, escolha entre +, -, * ou /.");
      break;
  }
}

//5 Nota escolar
function notaEscolar() {
  let nota = prompt("Digite a nota (A, B, C, D, F):").toUpperCase();
  switch (nota) {
    case "A":
      alert("Excelente");
      break;
    case "B":
      alert("Bom");
      break;
    case "C":
      alert("Regular");
      break;
    case "D":
      alert("Ruim");
      break;
    case "F":
      alert("Reprovado");
      break;
    default:
      alert("Nota inválida! Por favor, insira uma nota entre A e F.");
      break;
  }
}

//6 frutas
function frutas() {
  let fruta = prompt(
    "Digite o nome de uma fruta (maçã, banana, laranja):"
  ).toLowerCase();
  switch (fruta) {
    case "maçã":
      alert("Maçã: R$ 2/kg.");
      break;
    case "banana":
      alert("Banana: R$ 5/kg.");
      break;
    case "laranja":
      alert("Laranja: R$ 1.80/kg.");
      break;
    default:
      alert("Produto não disponível.");
      break;
  }
}

//7 tueno de estudo
function turnoDeEstudo() {
  let turno = prompt(
    "Digite o turno que você estuda (M-matutino, V-Vespertino, N-Noturno):"
  ).toUpperCase();
  switch (turno) {
    case "M":
      alert("Matutino");
      break;
    case "V":
      alert("Vespertino");
      break;
    case "N":
      alert("Noturno");
      break;
    default:
      alert("Turno inválido! Por favor, insira M, V ou N.");
      break;
  }
}

//8 - categoria de idade
function categoriaIdade() {
  let idade = Number(prompt("Digite sua idade:"));
  switch (true) {
    case idade >= 0 && idade <= 12:
      alert("Criança");
      break;
    case idade >= 13 && idade <= 17:
      alert("Adolescente");
      break;
    case idade >= 18 && idade <= 59:
      alert("Adulto");
      break;
    case idade >= 60:
      alert("Idoso");
      break;
    default:
      alert("Idade inválida!");
      break;
  }
}

//9 - estação do ano
function estacaoDoAno() {
  let estacao = prompt(
    "Digite o número da estação (1-4) para saber a estação do ano:"
  );
  switch (estacao) {
    case "1":
      alert("Verão");
      break;
    case "2":
      alert("Outono");
      break;
    case "3":
      alert("Inverno");
      break;
    case "4":
      alert("Primavera");
      break;
    default:
      alert("Estação inválida! Por favor, insira um número entre 1 e 4.");
      break;
  }
}

//10 - Cardapio
function cardapio() {
  let prato = prompt(
    "Digite o número do prato desejado (1-5)\n1- Pizza\n2- Hambúrguer\n3- Salada\n4- Massa\n5- Sopa:"
  );
  switch (prato) {
    case "1":
      alert("Prato 1: Pizza");
      break;
    case "2":
      alert("Prato 2: Hambúrguer");
      break;
    case "3":
      alert("Prato 3: Salada");
      break;
    case "4":
      alert("Prato 4: Massa");
      break;
    case "5":
      alert("Prato 5: Sopa");
      break;
    default:
      alert("Prato inválido! Por favor, insira um número entre 1 e 5.");
      break;
  }
}
