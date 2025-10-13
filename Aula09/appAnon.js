//função anonima é uma função que não tem nome
//geralmente atribuida a uma variável ou passada como parametro de outra função
//não é reutilizavel, apenas naquele contexto

const div = function(a,b) {
    return a/b
}
// console.log(div(4,2)) //2
// console.log(div(10,2)) //5
// console.log(div(10,0)) //Infinity

const saudacao = function(nome = 'visitante') {
    return `Olá, ${nome}!`
}
console.log(saudacao('Rhuan'))
console.log(saudacao())