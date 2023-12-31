var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let par = 0;

for (let i = 0; i < 5; i++) {
  let n = parseFloat(lines.shift());
  if (n % 2 == 0) par++;
}

console.log(`${par} valores pares`);
