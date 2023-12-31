var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines.shift().split(' ');
let horaInicial = parseInt(line1[0]);
let horaFinal = parseInt(line1[1]);
let duracao;

if (horaInicial > horaFinal) {
  duracao = 24 - horaInicial + horaFinal;
} else if (horaFinal > horaInicial) {
  duracao = horaFinal - horaInicial;
} else {
  duracao = 24;
}
console.log(`O JOGO DUROU ${duracao} HORA(S)`);
