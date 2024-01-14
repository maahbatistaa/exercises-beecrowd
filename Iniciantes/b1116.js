var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

for (let i = 0; i < N; i++) {
  let line1 = lines.shift().split(' ');
  let X = parseFloat(line1[0]);
  let Y = parseFloat(line1[1]);
  if (Y === 0) console.log('divisao impossivel');
  else {
    let divisao = X / Y;
    console.log(divisao.toFixed(1));
  }
}
