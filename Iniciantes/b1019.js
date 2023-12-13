var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let duracaoSegundos = parseInt(lines.shift());
let horas = Math.floor(duracaoSegundos / 3600)
let minutos = Math.floor((duracaoSegundos%3600)/60)
let segundo = Math.floor((duracaoSegundos%3600) % 60)
console.log(`${horas}:${minutos}:${segundo}`)
