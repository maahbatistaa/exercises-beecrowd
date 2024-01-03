var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

for (let i = 0; i < N; i++) {
  let line = lines.shift().split(' ');
  let n1 = parseFloat(line[0]);
  let n2 = parseFloat(line[1]);
  let n3 = parseFloat(line[2]);

  let media = (n1 * 2.0 + n2 * 3.0 + n3 * 5.0) / 10.0;

  console.log(media.toFixed(1));
}
