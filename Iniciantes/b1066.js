var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let par = 0,
  impar = 0,
  positivo = 0,
  negativo = 0;

for (let i = 0; i < 5; i++) {
  let n = parseInt(lines.shift());
  if (n % 2 == 0) par++;
  else impar++;
  if (n > 0) positivo++;
  else if (n < 0) negativo++;
}

console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivo(s)`);
console.log(`${negativo} valor(es) negativo(s)`);
