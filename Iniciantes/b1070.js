var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());

for (let i = 0; i < 6; i++) {
  if (X % 2 == 1) {
    console.log(X);
  } else {
    X++;
    console.log(X);
  }
  X++;
}
