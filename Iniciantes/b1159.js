var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let soma = 0

while(X != 0){
  for(let i = 0; i < 5; i++){
    if(X % 2 == 0){
      soma += X
      X+=2
    }else {
      soma +=X+1
      X +=2
    }
  }
  console.log(soma)
  soma = 0
  X = parseInt(lines.shift())
}