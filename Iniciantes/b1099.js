var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let soma = 0;
let line1 = lines.shift().split(' ');
let X = parseInt(line1[0]);
let Y = parseInt(line1[1]);

for (let i = 1; i <= N; i++) {
  if (X < Y) {
    for (let i = X + 1; i < Y; i++) {
      if (i % 2 != 0) {
        soma += i;
      }
    }
    console.log(soma);
  } else {
    for (let i = Y + 1; i < X; i++) {
      if (i % 2 != 0) {
        soma += i;
      }
    }
    console.log(soma);
  }
  
  line1 = lines.shift().split(' ');
  X = parseInt(line1[0]);
  Y = parseInt(line1[1]);
}
