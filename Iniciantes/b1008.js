var input = require('fs').readFileSync('../stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift())
var horas = parseInt(lines.shift())
var valorHora = parseFloat(lines.shift())
var salario = horas * valorHora

console.log("NUMBER = " + numero)
console.log("SALARY = U$ " + salario.toFixed(2))