var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let maior = 0;
let posicao = 0;

let n = parseInt(lines.shift());
for (let i = 1; i <= 10; i++) {
  if (n > maior) {
    maior = n;
    posicao = i;
  }

  n = parseInt(lines.shift());
}

console.log(maior);
console.log(posicao);
