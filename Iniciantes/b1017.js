var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const gastoFixo = 12.0

let horas = parseInt(lines.shift())
let velocidade = parseInt(lines.shift())

let distancia = velocidade * horas;
let gastoLitros = distancia / gastoFixo;

console.log(gastoLitros.toFixed(3))