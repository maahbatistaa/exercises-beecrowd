var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseInt(lines.shift());
let soma = 0;

if (Y > X) {
  for (let i = X; i <= Y; i++) {
    if (i % 13 !== 0) {
      soma += i;
    }
  }
} else {
  for (let i = Y; i <= X; i++) {
    if (i % 13 !== 0) {
      soma += i;
    }
  }
}

console.log(soma);
