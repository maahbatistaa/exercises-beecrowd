var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let positivo = 0;
for (let i = 0; i < 6; i++) {
  let n = parseFloat(lines.shift());
  if (n > 0) positivo++;
}
console.log(`${positivo} valores positivos`);
