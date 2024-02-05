var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseInt(lines.shift());

if (Y > X) {
  for (let i = X; i < Y; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
} else {
  for (let i = Y; i < X; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i)
    }
  }
}
