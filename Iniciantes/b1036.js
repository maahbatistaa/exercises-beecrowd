var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines.shift().split(' ');

let a = parseFloat(line1[0]);
let b = parseFloat(line1[1]);
let c = parseFloat(line1[2]);
let delta = b*b - 4 * a* c

if((a === 0) | ( delta < 0)){
  console.log('Impossivel calcular')
  return
}

let baskara = Math.sqrt(delta)
let R1 = (-b + baskara)/(2*a)
let R2 = (-b - baskara)/(2*a)

console.log('R1 =', R1.toFixed(5));
console.log('R2 =', R2.toFixed(5));
