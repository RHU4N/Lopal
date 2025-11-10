let nomes = ['Ana', 'Bia', 'Carlos', 'Daniel', 'Eva', 'Maju', 'Rhuan'];
// console.table(nomes);

// let qt_nomes = nomes.length // numeros de elementos
// console.log(`A quantidade de nomes é: ${qt_nomes}`)

// console.log(nomes[0]) // Ana
// console.log(nomes[2]) // Carlos

// let nome = "Rhuan Santana da Silva"
// let array_nome = nome.split(" ")
// let primeiro_nome = array_nome[0]
// let ultimo_nome = array_nome.at(-1)
// let nomeUsado = [primeiro_nome, ultimo_nome].join(" ")
// console.log(`Olá, ${nomeUsado}`)

// nomes.push('Fábio') // adiciona no final
// nomes.unshift('Zara') // adiciona no começo
// console.table(nomes);
// nomes.pop() // remove do final
// nomes.shift() // remove do começo
// console.table(nomes);

//verificar se existe
let existe = nomes.includes('Carlos') // true ou false
if (existe) {
    console.log('O nome existe na lista')
} else {
    console.log('O nome não existe na lista')
}

//traz o index do elemento
let posicao = nomes.indexOf('Daniel') // retorna o index ou -1
console.log(`O nome está na posição: ${posicao}`)

//ultima posição
posicao = nomes.lastIndexOf('Eva') // retorna o index ou -1
console.log(`O nome está na posição: ${posicao}`)

nomes.forEach(nome => console.log(`Olá ${nome}, seja bem-vindo(a)!`));

//adicionar um sobrenome "da Silva" para cada nome
let nomesComSobrenome = nomes.map(nome => `${nome} da Silva`);
console.table(nomesComSobrenome);

//filtre a lista e encontre o nome maju
let nomesComA = nomes.filter(nome => nome.toLowerCase().includes('maju'));

console.table(nomesComA);