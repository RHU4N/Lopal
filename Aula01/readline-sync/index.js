console.log('Teste Readline Sync!');

//Importando o módulo readline-sync para ler entrada di teclado
const readline = require('readline-sync');

//Usando o método question do readline-sync para ler a entrada do usuário
const nome = readline.question('Qual seu nome? ');

//Exibindo uma mensagem personalizada com o nome fornecido pelo usuário
console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);