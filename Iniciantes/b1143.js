var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
  let quadrado = i * i;
  let cubo = quadrado * i
  console.log(i, quadrado, cubo);
}
