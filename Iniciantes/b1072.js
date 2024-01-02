var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let dentro = 0,
  fora = 0;

for (let i = 0; i < N; i++) {
  let x = parseInt(lines.shift());
  if (x >= 10 && x <= 20) dentro += 1;
  else fora += 1;
}

console.log(`${dentro} in`)
console.log(`${fora} out`);
