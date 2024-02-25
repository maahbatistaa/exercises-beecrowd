var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

while (N >= 0) {
  if (N > 0) console.log('vai ter duas!');
  else console.log('vai ter copa!');

  N = parseInt(lines.shift())
}
