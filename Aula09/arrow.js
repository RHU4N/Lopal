//arrow function
//curto e moderno
//Introduzido no ES6
//() => {}

const div = (a,b) => {
    return a/b
}

// console.log(div(4,2)) //2
// console.log(div(10,2)) //5
// console.log(div(10,0)) //Infinity

const saudacao = (nome = 'visitante') => {
    return `Olá, ${nome}!`
}

console.log(saudacao('Rhuan'))
console.log(saudacao())

