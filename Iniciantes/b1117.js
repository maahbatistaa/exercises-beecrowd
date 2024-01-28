var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nota1 = parseFloat(lines.shift());
while (nota1 < 0 || nota1 > 10) {
  console.log('nota invalida');
  nota1 = parseFloat(lines.shift());
}

let nota2 = parseFloat(lines.shift());
while (nota2 < 0 || nota2 > 10) {
  console.log('nota invalida');
  nota2 = parseFloat(lines.shift());
}

let media = (nota1 + nota2) / 2;
console.log(`media = ${media}`);
