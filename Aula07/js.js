// let count = 0;
// let result = 0;
// while (count <= 10) { 
//     if(count === 10) {
//         process.stdout.write(count + '');
//     }else{ process.stdout.write(count + '+');}

//     result += count;
//     count++
// }
// console.log(`\nO resultado da soma de todos os numeros de 0 a 10 é: ${result}`);

// console.log('\nContando de 0 a 5:')
// let cont = 0;
// while (cont <= 5) {
//     console.log(cont)
//     cont++
// }

// cont = 0;
// let soma = 0;
// console.log('\nsomando de 0 a 5:')
// while (cont <= 5) {
//     console.log(cont)
//     soma += cont;
//     cont++
// }
// console.log(`\nO resultado da soma de 0 a 5 é: ${soma}`);


// //calculando com a formuula sem while
// let res = (10 * (10 + 1)) / 2;
// console.log(`\nResultado calculado com a formula: ${res},
//     (n * (n + 1)) / 2 onde n = 10\n`);

// count = 0;
// console.log('Contando de 0 a 10 de 2 em 2:');
// while (count <= 10) {
//     process.stdout.write(count === 10 ? count + '' : count + ',');
//     count+= 2
// }

// let count = 0;
// let res = 0;
// let sres = "";
// let sn = "";
// while(count <= 100){
//     if(count % 2 === 0) {
//         sres += `${count}${count === 100 ? '' : '+'}`;
//         res += count;
//     }
//     sn += `${count}${count === 100 ? '' : ','}`;
//     // process.stdout.write(count === 100 ? count + '' : count + ',');
//     count ++
// }
// console.log(`\nNúmeros de 0 a 100: \n${sn}`);
// console.log(`\n\nA soma dos numeros pares de 0 a 100 é: \n${sres} = ${res}`);

// let count = 0;
// let soma = 0;
// while(count <= 10){
//     if(count % 2 == 1){
//         soma += count;
//     }
//     count++;
// }
// console.log(`A soma dos números ímpares de 0 a 10 é: ${soma}`);

// let count = 0;
// let soma = 0;
// while(count <= 100){
//     console.log(count);
//     soma += count;
//     count++;
// }
// console.log(`A soma dos números de 0 a 100 é: ${soma}`);
let count = 30;
while(count >= 0){
    console.log(count);
    count--;
}