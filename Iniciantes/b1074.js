var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

for (let i = 0; i < N; i++) {
  let x = parseInt(lines.shift());
  if(x>0){
    if(x%2==0)console.log('EVEN POSITIVE')
    else console.log('ODD POSITIVE')
  } else if(x<0){
    if (x % 2 == 0) console.log('EVEN NEGATIVE');
    else console.log('ODD NEGATIVE');
  } else {
    console.log('NULL')
  }
}


