var input = require('fs').readFileSync('../stdin', 'utf8');
var lines = input.split('\n');

var peca1 = parseInt(lines.shift())
var qtd1 = parseInt(lines.shift())
var preco1 = parseFloat(lines.shift())

var peca2 = parseInt(lines.shift())
var qtd2 =  parseInt(lines.shift())
var preco2 = parseFloat(lines.shift())

var pagar = (qtd1 * preco1) + (qtd2 * preco2)

console.log("VALOR A PAGAR: R$ " + pagar.toFixed(2))