var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let T = parseInt(lines.shift());

let line1 = lines.shift().split(' ');
let r1 = parseInt(line1[0]);
let r2 = parseInt(line1[1]);

for (let i = 0; i < T; i++) {
  console.log(r1 + r2);
  line1 = lines.shift().split(' ');
  r1 = parseInt(line1[0]);
  r2 = parseInt(line1[1]);
}
