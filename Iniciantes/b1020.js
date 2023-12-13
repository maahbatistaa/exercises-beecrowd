var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let diasTotal = parseInt(lines.shift());
let ano = Math.floor(diasTotal / 365)
let meses = Math.floor((diasTotal%365)/30)
let dias = Math.floor((diasTotal % 365) % 30);
console.log(ano, 'ano(s)')
console.log(meses, 'mes(es)')
console.log(dias, 'dia(s)');
