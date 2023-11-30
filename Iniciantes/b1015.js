var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines.shift().split(' ');
let x1 = parseFloat(line1[0]);
let y1 = parseFloat(line1[1]);
let line2 = lines.shift().split(' ');
let x2 = parseFloat(line2[0])
let y2 = parseFloat(line2[1])

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

console.log(distancia.toFixed(4))
