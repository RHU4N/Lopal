//1.Crie uma função mensagem() que escreva no console:
function mensagem(){
    console.log("Bem-vindo ao curso de JavaScript!");
}

// 2. Crie uma função `boasVindas(nome)` que receba um nome e escreva: `"Olá, [nome]!"`.
function boasVindas(nome = "Visitante"){
    console.log(`Olá, ${nome}!`);
}

//3.Crie uma função soma(a, b) que receba dois números e retorne a soma.
function soma(a = 0, b = 0){
    return a + b;
}

//4.Crie uma função subtrair(a, b) que receba dois números e retorne a subtração.
function subtrair(a = 0, b = 0){
    return a - b;
}

// 5.Crie uma função dobro(n) que receba um número e retorne o dobro dele.
function dobro(n = 0){
    return n * 2;
}

// 6.Crie uma função triplo(n) que receba um número e retorne o triplo dele.
function triplo(n = 0){
    return n * 3;
}

// 7.Crie uma função quadrado(n) que receba um número e retorne o número multiplicado por ele mesmo.
function quadrado(n = 0){
    return n * n;
}

// 8.Crie uma função ehPar(n) que retorne true se o número for par e false se for ímpar.
function ehPar(n = 0){
    let resultado = n % 2 === 0 ? true : false;
    if(resultado){
        resultado = "par";
    } else {
        resultado = "impar";
    }
    return resultado;
}

//9.Crie uma função idade(anoNascimento) que calcule e retorne a idade da pessoa em 2025.
function idade(anoNascimento){
    return 2025 - anoNascimento;
}

//10.Crie uma função media(a, b, c) que calcule e retorne a média de três números.
function media(a = 0, b = 0, c = 0){
    return (a + b + c) / 3;
}

//11.Reescreva a função mensagem() usando arrow function.
const mensagemArrow = () => console.log("Bem-vindo ao curso de JavaScript!");

// 12.Reescreva a função boasVindas(nome) usando arrow function.
const boasVindasArrow = (nome = "Visitante") => console.log(`Olá, ${nome}!`);

// 13.Reescreva a função soma(a, b) usando arrow function.
const somaArrow = (a = 0, b = 0) => a + b;

// 14.Reescreva a função subtrair(a, b) usando arrow function.
const subtrairArrow = (a = 0, b = 0) => a - b;

// 15.Reescreva a função dobro(n) usando arrow function.
const dobroArrow = (n = 0) => n * 2;

// 16.Reescreva a função triplo(n) usando arrow function.
const triploArrow = (n = 0) => n * 3;

// 17.Reescreva a função quadrado(n) usando arrow function.
const quadradoArrow = (n = 0) => n * n;

// 18.Reescreva a função ehPar(n) usando arrow function.
const ehParArrow = (n = 0) => {
    let resultado = n % 2 === 0 ? true : false;
    if(resultado){
        resultado = "par";
    } else {
        resultado = "impar";
    }
    return resultado;
};

// 19.Reescreva a função idade(anoNascimento) usando arrow function.
const idadeArrow = (anoNascimento) => 2025 - anoNascimento;

// 20.Reescreva a função media(a, b, c) usando arrow function.
const mediaArrow = (a = 0, b = 0, c = 0) => (a + b + c) / 3;

//21.Crie uma função positivoOuNegativo(n) que diga se o número é positivo, negativo ou zero.
function positivoOuNegativo(n = 0){
    let resultado = "";
    if(n > 0){
        resultado = "positivo";
    } else if(n < 0){
        resultado = "negativo";
    } else {
        resultado = "zero";
    }
    return resultado;
}

//22.Crie uma função maiorNumero(a, b) que mostre qual é o maior entre dois números.
function maiorNumero(a = 0, b = 0){
    let resultado = "";
    if(a > b){
        resultado = `${a} é maior que ${b}`;
    } else {
        resultado = `${b} é maior que ${a}`;
    }
    return resultado;
}

//23.Crie uma função menorNumero(a, b) que mostre qual é o menor entre dois números.
function menorNumero(a = 0, b = 0){
    let resultado = "";
    if(a < b){
        resultado = `${a} é menor que ${b}`;
    } else {
        resultado = `${b} é menor que ${a}`;
    }
    return resultado;
}

//24.Crie uma função ehMaiorDeIdade(idade) que retorne “Maior de idade” ou “Menor de idade”.
function ehMaiorDeIdade(idade = 0){
    let resultado = "";
    if(idade >= 18){
        resultado = "Maior de idade";
    } else {
        resultado = "Menor de idade";
    }
    return resultado;
}

//25.Crie uma função restoDivisao(a, b) que retorne o resto da divisão de a por b.
function restoDivisao(a = 0, b = 1){
    return a % b;
}

// 26.Crie uma função multiplicaPorDez(n) que retorne o número multiplicado por 10.
function multiplicaPorDez(n = 0){
    return n * 10;
}

// 27.Crie uma função mensagemFinal(nome) que retorne "Até logo, [nome]!".
function mensagemFinal(nome = "Visitante"){
    return `Até logo, ${nome}!`;
}

// 28.Crie uma função converterParaHoras(minutos) que mostre quantas horas equivalem aos minutos informados.
function converterParaHoras(minutos = 0){
    return minutos / 60;
}

// 29.Crie uma função parOuImpar(n) que mostre se o número é par ou ímpar.
function parOuImpar(n = 0){
    let resultado = n % 2 === 0 ? true : false;
    if(resultado){
        resultado = "par";
    } else {
        resultado = "impar";
    }
    return resultado;
}

//30.Reescreva as funções 21 a 29 também usando arrow function.
const positivoOuNegativoArrow = (n = 0) => {
    let resultado = "";
    if(n > 0){
        resultado = "positivo";
    }
    else if(n < 0){
        resultado = "negativo";
    } 
    else {
        resultado = "zero";
    }
    return resultado;
}

const parOuImparArrow = (n = 0) => {
    let resultado = n % 2 === 0 ? true : false;
    if(resultado){
        resultado = "par";
    }
    else {
        resultado = "impar";
    }
    return resultado;
}
