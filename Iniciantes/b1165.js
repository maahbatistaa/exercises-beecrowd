var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let X = parseInt(lines.shift());
let soma = 0;

for (let i = 0; i < N; i++) {
  for (let j = 1; j <= X; j++) {
    if (X % j === 0) {
      soma += j;
    }
  }

  if (soma === X + 1) console.log(`${X} eh primo`);
  else console.log(`${X} nao eh primo`);
  soma = 0;

  X = parseInt(lines.shift());
}
