// let soma //atual
// var idade // depreciado
// const nome = "Rhuan"

// let chocolate = "lacta" //string
// let bicicleta = "caloi" //string

// "" ou '' ou `` string
// 1234 ou 1.2343 number
// true ou false boolean
// null vazio
// undefined indefinido
// any tipo especial
// 10/"a" NAN Not a Number

// typeof chocolate // mostra o tipo da variavel
// typeof bicicleta // mostra o tipo da variavel

//tipagem dinamica é uma linguagem que não precisa definir o 
// tipo da variavel



//estruturas de decisão
// let idade = 17
// if (idade > 18) {
//     console.log("Maior de idade")
// } else if (idade == 18) {
//     console.log("Vc ficou de maior esse ano")
// }else {
//     console.log("Menor de idade")
// }

let num = "10"
if(num === 10){
    console.log("é 10")
}

let opc = 1
switch(opc){
    case 1:
        console.log("Valores")
        break;
    case 2:
        console.log("Agendamento")
        break;
    default:
        console.log("Opção inválida")
        break;
        
}

// funções
//função tradicional
function soma(a,b){
    return a + b
}

function somar(a, b){ return a + b }

//função anonima
const subtrai = function(a, b){
    return a - b
}

const subtrair = function(a, b){ return a - b }

//arrow function , () => {}
const multiplica = (a, b) => {
    return a * b
} //função anonima de forma simple e moderna

const multiplicar = (a, b) => a * b
