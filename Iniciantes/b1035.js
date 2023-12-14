var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines.shift().split(' ');
let A = parseInt(line1[0])
let B = parseInt(line1[1])
let C = parseInt(line1[2])
let D = parseInt(line1[3]);

if(B > C && (C + D) > (A + B) && C > 0 && D > 0 && A%2 === 0){
  console.log('Valores aceitos')
} else {
  console.log('Valores nao aceitos')
}

