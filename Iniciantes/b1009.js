var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift()
var salarioFixo = parseFloat(lines.shift())
var vendas = parseFloat(lines.shift())
var comisao = vendas * 0.15
var salario = comisao + salarioFixo

console.log("TOTAL = R$ " + salario.toFixed(2))