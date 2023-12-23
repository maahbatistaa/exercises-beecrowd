var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines.shift().split(' ');
let n1 = parseInt(line1[0]);
let n2 = parseInt(line1[1]);
let n3 = parseInt(line1[2]);

if (n1 < n2 && n1 < n3) {
  console.log(n1);
  if (n2 < n3) {
    console.log(n2);
    console.log(n3);
  } else {
    console.log(n3);
    console.log(n2);
  }
} else if (n2 < n3) {
  console.log(n2);
  if (n3 < n1) {
    console.log(n3);
    console.log(n1)
  } else {
    console.log(n1)
    console.log(n3)
  }
} else {
  console.log(n3)
  if(n1<n2){
    console.log(n1)
    console.log(n2)
  } else {
    console.log(n2)
    console.log(n1)
  }
}

console.log()
console.log(n1);
console.log(n2);
console.log(n3);
