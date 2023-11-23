var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var nota1 = parseFloat(lines.shift())
var nota2 = parseFloat(lines.shift())
var media = ((nota1 * 3.5) + (nota2 * 7.5)) / 11.0

console.log("MEDIA = " + media.toFixed(5))