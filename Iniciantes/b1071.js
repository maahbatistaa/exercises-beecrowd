var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines.shift());
var Y = parseInt(lines.shift());
let soma = 0;

if (X < Y) {
  for (let i = X + 1; i < Y; i++) {
    if (i % 2 != 0) {
      soma += i;
    }
  }
} else {
  for (let i = Y + 1; i < X; i++) {
    if (i % 2 != 0) {
      soma += i;
    }
  }
}
console.log(soma);
