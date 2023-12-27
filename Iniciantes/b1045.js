// var input = require('fs').readFileSync('stdin', 'utf8');
// var lines = input.split('\n');

// let line1 = lines.shift().split(' ');
// let A = parseInt(line1[0]);
// let B = parseInt(line1[1]);
// let C = parseInt(line1[2]);
// let aux;

// if (B > A && B > C) {
//   aux = A;
//   A = B;
//   B = aux;
// } else if (C > A) {
//   aux = A;
//   A = C;
//   C = aux;
// }

// if (A >= B + C) {
//   console.log('NAO FORMA TRIANGULO');
// } else {
//   if (A * A == B * B + C * C) console.log('TRIANGULO RETANGULO');
//   if (A * A > B * B + C * C) console.log('TRIANGULO OBTUSANGULO');
//   if (A * A < B * B + C * C) console.log('TRIANGULO ACUTANGULO');
//   if (A == B && A == C) console.log('TRIANGULO EQUILATERO');
//   if ((A == B && A != C) || (A == C && A != B) || (B == C && B != A))
//     console.log('TRIANGULO ISOSCELES');
// }
