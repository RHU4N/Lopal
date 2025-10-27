// let nome = "Maria" // string
// let idade = 28 // number
// let altura = 1.65 // number
// let estaFechado = true // boolean

// let nomes = ["João", "Maria", "José"]; // array de strings

// console.log(nomes[1])
// console.table(nomes)

// nomes.push("Ana") // Adiciona um elemento no final do array
// console.table(nomes)

// nomes.shift() // Remove o primeiro elemento do array
// console.table(nomes) // Remove "João"

// nomes.unshift("Adam") // Adiciona um elemento no início do array
// console.table(nomes) // Adiciona "Adam" no início

// nomes.pop() // Remove o último elemento do array
// console.table(nomes) // Remove "Ana"

// //verifca se existe o elemento no array
// console.log(nomes.includes("Lucas") )// false
// console.log(nomes.includes("Adam") )// true

// //retorna o valor do índice
// console.table(nomes)
// //primeiro elemento com valor
// console.log(nomes.indexOf("Adam")) // 0
// //último elemento com valor
// console.log(nomes.lastIndexOf("Maria")) // 1

let numeros = [1, 2, 3, 4]; // array de números
let names = ["João", "Maria", "José", "Serafim"]; // array de strings

for (let i = 0; i < numeros.length; i++) {
  console.log(`Índice: ${i} - Valor: ${numeros[i]}`);
}
console.log("-=".repeat(25) + "-");
numeros.forEach((num, i, array) =>
  console.log(`Índice: ${i} - Valor: ${num} - Array: ${array}`)
);
console.log("-=".repeat(25) + "-");
let dobro = numeros.map((valor) => valor * 2);

// console.table(numeros);
// console.table(dobro);

names.forEach((name, i, array) =>
  console.log(`Índice: ${i} - Valor: ${name} - Array: ${array}`)
);

let de0a10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let DOBRAR = de0a10.map((num) => {
  return num * 2;
});

console.table(de0a10);
console.table(DOBRAR);

//filtrar valores
let resultado = de0a10.filter((num) => num % 2 === 0); //números pares

console.table(resultado);

let palavras = [
    "olá", "tudo", "bem", "com", "você", "hoje",
    "amigo", "mundo", "casa", "livro", "feliz", "tempo", "amor", "abrir",
    "saudade", "estudar", "programa", "javascript", "música", "coração"
];
let resultado2 = palavras.filter(palavra => palavra.length >5 );

console.table(palavras);
console.table(resultado2);


    