var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines.shift().split(' ');
let n1 = parseFloat(line1[0]);
let n2 = parseFloat(line1[1]);
let n3 = parseFloat(line1[2]);
let n4 = parseFloat(line1[3]);

let media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10.0;
console.log(`Media: ${media.toFixed(1)}`);

if (media < 6.9 && media >= 5.0) {
  console.log('Aluno em exame.');

  let notaExame = parseFloat(lines.shift());
  console.log(`Nota do exame: ${notaExame.toFixed(1)}`);

  let exame = (media + notaExame) / 2;

  if (exame > 5.0) {
    console.log('Aluno aprovado.');
    console.log(`Media final: ${exame.toFixed(1)}`);
  } else {
    console.log('Aluno reprovado.');
  }
} else if (media > 7.0) {
  console.log('Aluno aprovado.');
} else {
  console.log('Aluno reprovado.');
}
