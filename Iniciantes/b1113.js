var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines.shift().split(' ');
let X = parseInt(line1[0]);
let Y = parseInt(line1[1]);

while (X != Y) {
  if (X < Y) console.log('Crescente');
  else console.log('Decrescente');

  line1 = lines.shift().split(' ');
  X = parseInt(line1[0]);
  Y = parseInt(line1[1]);
}
