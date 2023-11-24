var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;

var line1 = lines.shift().split(' ');
var A = parseFloat(line1[0]);
var B = parseFloat(line1[1]);
var C = parseFloat(line1[2]);

var triangulo = (A * C) / 2;
var circulo = pi * Math.pow(C, 2);
var trapezio = ((A + B) * C) / 2;
var quadrado = Math.pow(B, 2);
var retangulo = A * B;

console.log('TRIANGULO: ', triangulo.toFixed(3));
console.log('CIRCULO: ', circulo.toFixed(3));
console.log('TRAPEZIO: ', trapezio.toFixed(3));
console.log('QUADRADO: ', quadrado.toFixed(3));
console.log('RETANGULO: ', retangulo.toFixed(3));
