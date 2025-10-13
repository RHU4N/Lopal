function clicar() {
    document.getElementById("test").innerHTML = "Olá";
    document.getElementById("test").style.color = "red";
    document.getElementById("test").style.backgroundColor = "black";
    document.getElementById("btn").onclick = function() { 
        document.getElementById("test").innerHTML = "Mudei de novo!";
        document.getElementById("test").style.color = "blue";
        document.getElementById("test").style.backgroundColor = "yellow";
        document.getElementById("btn").onclick = clicar;
}
}


function frase(){
    let nome = prompt("Digite seu nome")
    let idade = prompt("digite sua idade")
    console.log(`Olá ${nome}, seua idade é ${idade}`)
}
// frase()

const dobro = function(a){
    return a*2
}
// console.log("O dobro de 2 é:",dobro(2))

const soma = (a,b) => {
    let res = a+b
    console.log(`A soma é ${res}`)
}
// soma(5,2)

function parOuImpar(a){
    if(a % 2 == 0){
        console.log("É par")
    }
    else{
        console.log("É impar")
    }
}
// parOuImpar(2)

function returnSaudacao(){
    return "Olá, tudo bem?"
}
// console.log(returnSaudacao())

// function somaprof(){
//     return 2+2
// }
// console.log(somaprof())

function somaprof(a,b){
    return a+b
}
// console.log(somaprof(somaprof(1,2),somaprof(2,3)))

function bemvindo(nome="Fulano"){
    return `Olá ${nome}, seja bem vindo!`
}
// console.log(bemvindo("Rhuan"))
// console.log(bemvindo())

function mult(a,b){ return a*b }
// console.log(mult(2,3))

function sub(a,b){ return a-b }
// console.log(sub(5,2))



