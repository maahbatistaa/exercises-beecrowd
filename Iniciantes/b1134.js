var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let cod = parseInt(lines.shift());
let alcool = 0,
  gasolina = 0,
  diesel = 0;

while (cod != 4) {
  if (cod == 1) alcool += 1;
  else if (cod == 2) gasolina += 1;
  else if (cod == 3) diesel += 1;
  cod = parseInt(lines.shift());
}

console.log('MUITO OBRIGADO');
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
