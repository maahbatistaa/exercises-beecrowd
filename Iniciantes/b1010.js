var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines.shift().split(' ');
var cod1 = parseInt(line1[0]);
var qtd1 = parseInt(line1[1]);
var preco1 = parseFloat(line1[2]);

var line2 = lines.shift().split(' ')
var cod2 = parseInt(line2[0]);
var qtd2 = parseInt(line2[1]);
var preco2 = parseFloat(line2[2]);

var total = (qtd1 * preco1) + (qtd2 * preco2)

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));
