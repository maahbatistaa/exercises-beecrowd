var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let cont = 1;

for (let i = 0; i < N; i++) {
  console.log(`${cont} ${(cont += 1)} ${(cont += 1)} PUM`);
  cont +=2
}
