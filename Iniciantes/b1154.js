var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let cont = 0
let soma = 0

while (N > 0) {
  soma += N
  cont++
  N = parseInt(lines.shift())
}

let media = soma / cont

console.log(media.toFixed(2))
