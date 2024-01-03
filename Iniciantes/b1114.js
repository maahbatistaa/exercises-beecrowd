var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const senhaValida = 2002

let senha = parseInt(lines.shift());

while(senha != senhaValida){
  console.log('Senha Invalida');
  senha = parseInt(lines.shift());
}

console.log('Acesso Permitido');