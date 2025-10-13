//1. contagem simples
function contagemSimples(){
 for(let count = 1; count <= 10; count++){
    console.log(count);
 }
}

// //2. contagem regressiva
function contagemRegressiva(){
for(let count = 10; count >= 1; count--){
    console.log(count);
}
}

// //3. numeros pares de 1 a 20
function numerosPares(){
for(let count = 1; count <= 20; count++){
    if(count % 2 === 0){
        console.log(count);
    }
}
}

// //4. numeros impares de 1 a 20
function numerosImpares(){
for(let count = 1; count <= 20; count++){
    if(count % 2 !== 0){
        console.log(count);
    }
}
}

// //5. tabuada de um numero
// let num = 5;
// for(let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }

//6. tabuada dinamica
// let num = Number(prompt("Digite um numero: "));
// for(let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// 7. soma dos numeros de 1 a 100
// let soma = 0;
// for (let i = 1; i <= 100; i++) {
//   soma += i; // soma = soma + i
// }
// console.log(`A soma dos numeros de 1 a 100 é: ${soma}`);

// //8. soma dos pares
// let somaPares = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     somaPares += i;
//   }
// }
// console.log(`A soma dos numeros pares de 1 a 50 é: ${somaPares}`);

//9 multiplicação acumulada
// let mult = 1;
// for (let i = 1; i <=5; i++) {
//   mult *= i; // mult = mult * i
// }
// console.log(`A multiplicação acumulada de 1 a 5 é: ${mult}`);

// 10. numeros multiplos de 3
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }

// 11. numeros divisiveis por 5
// let count = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0) {
//     count++;
//   }
// }
// console.log(`A quantidade de numeros divisiveis por 5 de 1 a 100 é: ${count}`);

// 12. quadrados dos numeros
// for (let i = 1; i <= 10; i++) {
//   console.log(`O quadrado de ${i}² é: ${i * i}`);
// }

// //13 inversão de string
// let str = prompt("Digite uma palavra: ");
// let inversa = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   inversa += str[i];
// }
// console.log(`A inversão de ${str} é: ${inversa}`);

// // 14 contar vogais
// let palavra = prompt("Digite uma palavra: ");
// let vogais = "aeiouAEIOU";
// let countVogais = 0;
// for (let i = 0; i < palavra.length; i++) {
//   if (vogais.includes(palavra[i])) {
//     countVogais++;
//   }
// }
// console.log(`A palavra ${palavra} tem ${countVogais} vogais.`);

//media notas
// let soma = 0;
// for (let i = 0; i <= 5; i++) {
//    let nota = Number(prompt(`Digite a ${i + 1}°nota : `));
//    soma += nota;
// }
// let media = soma / 5;
// console.log(`A média das notas é: ${media}`);

//16 Numeros dentro de array
// let num = [5, 8, 12, 20, 25, 30];
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// 17. soma dos numeros dentro do array
// let num = [5, 8, 12, 20, 25, 30];
// let soma = 0;
// for (let i = 0; i < num.length; i++) {
//   soma += num[i];
// }
// console.log(`A soma dos numeros dentro do array é: ${soma}`);

//18. maior numero dentro do array
// let num = [5, 8, 12, 20, 25, 30];
// let maior = num[0];
// for (let i = 1; i < num.length; i++) {
//   if (num[i] > maior) {
//     maior = num[i];
//   }
// }
// console.log(`O maior número dentro do array é: ${maior}`);

// //19.repetir texto
// let texto = prompt("Digite um texto: ");
// let vezes = Number(prompt("Digite quantas vezes quer repetir: "));
// for (let i = 0; i < vezes; i++) {
//   console.log(texto);
// }

//20. piramide de asteriscos
// let linhas = 5;
// for (let i = 1; i <= linhas; i++) {
//   console.log("*".repeat(i));
// }