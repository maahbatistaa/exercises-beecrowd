var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());

for(let i = 1; i <= X; i++){
  if(i%2==1) console.log(i)
}

