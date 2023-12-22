var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines.shift().split(' ');
var codigo = parseInt(line1[0]);
var quantidade = parseInt(line1[1]);

var total = 0;

switch (codigo) {
  case 1:
    total = 4.0 * quantidade;
    break;
  case 2:
    total = 4.5 * quantidade;
    break;
  case 3:
    total = 5 * quantidade;
    break;
  case 4:
    total = 2 * quantidade;
    break;
  case 5:
    total = 1.5 * quantidade;
    break;
}

console.log(`Total: R$ ${total.toFixed(2)}`)
