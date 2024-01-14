var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines.shift().split(' ');
let X = parseInt(line1[0]);
let Y = parseInt(line1[1]);

while (X != 0 && Y != 0) {
  if(X > 0 && Y > 0) console.log('primeiro');
  else if(X < 0 && Y > 0) console.log('segundo');
  else if(X < 0 && Y < 0) console.log('terceiro');
  else if(X > 0 && Y < 0) console.log('quarto');

  line1 = lines.shift().split(' ');
  X = parseInt(line1[0]);
  Y = parseInt(line1[1]);
}
