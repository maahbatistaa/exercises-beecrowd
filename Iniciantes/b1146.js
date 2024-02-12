var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

while (N != 0) {
  let array = [];
  for (let i = 1; i <= N; i++) {
    array.push(i);
  }

  let stringArray = array.join(' ');
  console.log(stringArray);

  N = parseInt(lines.shift());
}
