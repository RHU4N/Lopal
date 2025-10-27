// let alunos = ["Carlos", "Eduardo", "Ana", "Daniela", "Bruno"];
// console.table(alunos)
// console.log(alunos)
// console.log(alunos[2])  // Acessando o terceiro elemento do array (índice 2), acessando pelo indice começa em 0

// console.log(alunos[(alunos.length - 1)]) // Propriedade length para saber o tamanho do array
// console.log(alunos[0]) // Acessando um índice que não existe

// const numeros = [5, 8, 2, 10, 3];

// const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"];

// frutas.push("Abacaxi"); // Adiciona um elemento no final do array
// console.table(frutas)
// frutas.shift(); // Remove o primeiro elemento do array
// console.table(frutas)
// frutas.pop(); // Remove o último elemento do array
// console.table(frutas)
// frutas.unshift("Melancia");
// console.table(frutas) // Adiciona um elemento no início do array

// if (frutas.includes("Melancia")) { // Verifica se o array contém um elemento específico
//     console.log("Melancia está na lista de frutas.");
// }else {
//     frutas.push("Melancia");
//     console.log("Melancia adicionada à lista de frutas.");
// }

const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango", "Banana", "Abacaxi", "Melancia", "Pera", "Maracujá", "Kiwi", "Mamão", "Cereja", "Maracujá", "Açaí", "Framboesa", "Goiaba", "Tangerina", "Limão", "Figo", "Damasco", "Amora", "Nectarina", "Caju", "Pitaya", "Carambola", "Jabuticaba", "Maracujá"];

console.log(frutas.indexOf("Maracujá")); // Retorna o índice da primeira ocorrência de "Maracujá"
console.log(frutas[9]); // Acessando o elemento no índice 9

console.log(frutas.lastIndexOf("Maracujá")); // Retorna o índice da última ocorrência de "Maracujá"
console.log(frutas[27]); // Acessando o elemento no índice 27

const numeros = [5, 8, 2, 10, 3, 8, 15, 8, 20];
const dobro = []

numeros.forEach((num)=>{
    console.log(`O dobro de ${num} é ${num * 2}`);
    dobro.push(`O dobro de ${num} é ${num * 2}`);
})

console.table(dobro)