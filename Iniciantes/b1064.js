var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let positivo = 0,
  soma = 0;
  
for (let i = 0; i < 6; i++) {
  let n = parseFloat(lines.shift());
  if (n > 0) {
    positivo++;
    soma += n;
  }
}
let media = soma / positivo;
console.log(`${positivo} valores positivos`);
console.log(media.toFixed(1));
