var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let notasI = parseFloat(lines.shift());
let notas = Math.floor(notasI);
let moedas = notasI - notas + 0.001;

let notas100 = Math.floor(notas / 100.0);
notas -= notas100 * 100.0;
let notas50 = Math.floor(notas / 50.0);
notas -= notas50 * 50.0;
let notas20 = Math.floor(notas / 20.0);
notas -= notas20 * 20.0;
let notas10 = Math.floor(notas / 10.0);
notas -= notas10 * 10.0;
let notas5 = Math.floor(notas / 5.0);
notas -= notas5 * 5.0;
let notas2 = Math.floor(notas / 2.0);
notas -= notas2 * 2.0


let moedas1 = Math.floor(notas / 1.0);
let moedas50 = Math.floor(moedas / 0.5);
moedas -= moedas50 * 0.5;
let moedas25 = Math.floor(moedas / 0.25);
moedas -= moedas25 * 0.25;
let moedas10 = Math.floor(moedas / 0.1);
moedas -= moedas10 * 0.1;
let moedas5 = Math.floor(moedas / 0.05);
moedas -= moedas5 * 0.05;
let moedas01 = Math.floor(moedas / 0.01);


console.log('NOTAS:');
console.log(notas100, 'nota(s) de R$ 100.00');
console.log(notas50, 'nota(s) de R$ 50.00');
console.log(notas20, 'nota(s) de R$ 20.00');
console.log(notas10, 'nota(s) de R$ 10.00');
console.log(notas5, 'nota(s) de R$ 5.00');
console.log(notas2, 'nota(s) de R$ 2.00');
console.log('MOEDAS:');
console.log(moedas1, 'moeda(s) de R$ 1.00');
console.log(moedas50, 'moeda(s) de R$ 0.50');
console.log(moedas25, 'moeda(s) de R$ 0.25');
console.log(moedas10, 'moeda(s) de R$ 0.10');
console.log(moedas5, 'moeda(s) de R$ 0.05');
console.log(moedas01, 'moeda(s) de R$ 0.01');
