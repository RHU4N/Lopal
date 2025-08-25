// Comentário de uma linha
/* Comentário
    várias linhas */

// Variáveis
var sou_uma_variavel // não usar mais, porém funciona, antigo (evitar)
let chocolate // pode ser alterada, usada atualmente (escopo de bloco)

// Constantes
const preco = 10 // constante (imutável), tem que começar com um valor
console.log("tipo:", typeof preco) // imprime o tipo da variável, no caso number

sou_uma_variavel = "Hello World!" // pode ser alterada
chocolate = "Lacta" // pode ser alterada


console.log(sou_uma_variavel) // imprime no console o valor da variável
console.log(chocolate) // imprime no console o valor da variável
console.log("oi") // imprime no console

// Não pode substituir valor em constante
// preco = 20 // erro, não pode alterar valor de constante

// Tipos de dados
// string, number, boolean, null, undefined, object, symbol

// String -> 'texto', "texto", `texto`
let saudacao = `Ola mundo` // aspas simples
console.log("tipo:", typeof saudacao) // imprime o tipo da variável

let nome = "João"
console.log("tipo:", typeof nome) // imprime o tipo da variável

let sobrenome = "Silva"
console.log("tipo:", typeof sobrenome) // imprime o tipo da variável

let nomeCompleto = `${nome} ${sobrenome}` // template string, permite interpolação de variáveis
console.log("tipo:", typeof nomeCompleto) // imprime o tipo da variável

// Number -> 1, 2, 3, 4, 5 ou 20.22
let idade = 30
console.log("tipo:", typeof idade) // imprime o tipo da variável

let altura = 1.75
console.log("tipo:", typeof altura) // imprime o tipo da variável

// Boolean -> true, false
let isAdulto = true
console.log("tipo:", typeof isAdulto) // imprime o tipo da variável

let isEstudante = false
console.log("tipo:", typeof isEstudante) // imprime o tipo da variável

// Undefined -> variável declarada mas sem valor
let variavelSemValor
console.log("tipo:", typeof variavelSemValor) // imprime undefined

// Null -> variável declarada com valor nulo
let variavelNula = null
console.log("tipo:", typeof variavelNula) // imprime object (bug do JS)

// NaN -> Not a Number, resultado de uma operação matemática inválida
let resultadoInvalido = 0 / 0
console.log("tipo:", typeof resultadoInvalido) // imprime NaN

// Imprimindo valores
console.log(resultadoInvalido) // imprime NaN
console.log(variavelSemValor) // imprime undefined
console.log(variavelNula) // imprime null


