var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines.shift());

if (salario <= 400.0) {
  reajuste(0.15);
} else if (salario > 400.0 && salario <= 800.0) {
  reajuste(0.12);
} else if (salario > 800.0 && salario <= 1200.0) {
  reajuste(0.1);
} else if (salario > 1200.0 && salario <= 2000.0) {
  reajuste(0.07);
} else {
  reajuste(0.04);
}

function reajuste(percentual) {
  let bonus = salario * percentual;
  let novoSalario = bonus + salario;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${bonus.toFixed(2)}`);
  console.log(`Em percentual: ${(percentual * 100).toFixed(0)} %`);
}
