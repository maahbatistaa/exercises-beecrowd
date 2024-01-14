var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines.shift().split(' ');
let M = parseInt(line1[0]);
let N = parseInt(line1[1]);
let soma = 0;
let array = [];

while (M > 0 && N > 0) {
  if (M > N) {
    for (let i = N; i <= M; i++) {
      soma += i;
      array += i + ' ';
    }
  } else {
    for (let i = M; i <= N; i++) {
      soma += i;
      array += i;
    }
  }

  console.log(`${array}Sum=${soma}`);
  array = [];
  soma = 0;

  line1 = lines.shift().split(' ');
  M = parseInt(line1[0]);
  N = parseInt(line1[1]);
}
