// let pessoas ={
//     pessoa1:{
//         nome: 'Ana',
//         idade: 28,
//         cidade: 'São Paulo'
//     },
//     pessoa2:{
//         nome: 'Bia',
//         idade: 34,
//         cidade: 'Rio de Janeiro'
//     },
//     pessoa3:{
//         nome: 'Carlos',
//         idade: 22,
//         cidade: 'Belo Horizonte'
//     }
// }

// Em js, um objeto é uma estrutura que permite guardar dados e comportamentos juntos
//é uma coleção de pares ->nome:valor ou chave-valor, pmde cada valor pode ser um dado ou uma função

// termo -> significa -> analogia

// propriedade -> o que ele é (dados) -> RG/Informações pessoais
// método -> o que ele faz (ações) -> Habilidades(andar, correr, falar)

// sintaxe de objeto
// const nomeDoObjeto = {
//     propriedade1: valor1,
//     propriedade2: valor2,
//     metodo(){

//     }
// }

// objeto cachorro
// const cachorro = {
//     nome: 'Rex',
//     raca: 'Pastor Alemão',
//     idade: 5,
//     latir(){
//         console.log('Au Au!')
//     }
// }
// console.log(cachorro.raca = 'Labrador');

// console.log(`O nome do cachorro é ${cachorro.nome} e ele tem ${cachorro.idade} anos e a raça é ${cachorro.raca}.`);
// cachorro.latir()

// const jogo = {
//   nome: "minecraft",
//   genero: "Aventura",
//   plataforma: ["PC", "Xbox", "PlayStation", "Mobile"],
//   desenvolvedor: "Mojang Studios",
//   anoCriacao: 2009,
//   detalhesJogo() {
//     console.log(
//       `${this.nome} é um jogo de ${this.genero} desenvolvido pela ${
//         this.desenvolvedor
//       } em ${
//         this.anoCriacao
//       }. Está disponível para as plataformas: ${this.plataforma.join(", ")}.`
//     );
//   },
//   iniciar() {
//     console.log("Iniciando o jogo...");
//     for (let i = 0; i <= 100; i += 10) {
//       console.log(`Carregando... ${i}%`);
//     }
//     console.log("Jogo iniciado! Divirta-se!");
//   },
//   jogar() {
//     let numeros = [1, 2, 3, 4, 5];
//     numeros.reverse();
//     numeros.forEach(n => console.log(`Jogando... Nível ${n}`));

//   },
// };

// jogo.detalhesJogo();
// jogo.iniciar();

// let carro ={
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2020,
//     ligar(){
//         console.log('O carro está ligado.');
//     },
// }

// console.log(carro.modelo)
// console.log(carro[`modelo`])

// carro.cor = 'Prata' // adicionando nova propriedade
// console.log(carro)

// carro.ano = 2021 // alterando valor da propriedade
// console.log(carro)

// delete carro.cor // removendo propriedade
// console.log(carro)

// obj com metodos
// let pessoa = {
//     nome: 'João',
//     idade: 30,
//     falar(){
//         console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
//     }

// }

// pessoa.falar();

// pessoa.nome = 'Maria'
// pessoa.idade = 25
// pessoa.falar();

let produto = { nome: "Smartphone", marca: "Samsung", preco: 2500 };

for (let chave in produto) {
  console.log("chave:", chave);
  console.log("valor:", produto[chave]);
}
// console.log(`${chave}: ${produto[chave]}`);
// }

fetch('https://viacep.com.br/ws/01001000/json/')
  .then(response => response.json())
  .then(data => {   
    for (let chave in data) {
      console.log(`${chave}: ${data[chave]}`);
    }
});



