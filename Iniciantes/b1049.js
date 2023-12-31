var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var palavra1 = lines.shift().trim();
var palavra2 = lines.shift().trim();
var palavra3 = lines.shift().trim();

if (
  palavra1 === 'vertebrado' &&
  palavra2 === 'ave' &&
  palavra3 === 'carnivoro'
) {
  console.log('aguia');
} else if (
  palavra1 === 'vertebrado' &&
  palavra2 === 'ave' &&
  palavra3 === 'onivoro'
) {
  console.log('pomba');
} else if (
  palavra1 === 'vertebrado' &&
  palavra2 === 'mamifero' &&
  palavra3 === 'onivoro'
) {
  console.log('homem');
} else if (
  palavra1 === 'vertebrado' &&
  palavra2 === 'mamifero' &&
  palavra3 === 'herbivoro'
) {
  console.log('vaca');
} else if (
  palavra1 === 'invertebrado' &&
  palavra2 === 'inseto' &&
  palavra3 === 'hematofago'
) {
  console.log('pulga');
} else if (
  palavra1 === 'invertebrado' &&
  palavra2 === 'inseto' &&
  palavra3 === 'herbivoro'
) {
  console.log('lagarta');
} else if (
  palavra1 === 'invertebrado' &&
  palavra2 === 'anelideo' &&
  palavra3 === 'hematofago'
) {
  console.log('sanguessuga');
} else if (
  palavra1 === 'invertebrado' &&
  palavra2 === 'anelideo' &&
  palavra3 === 'onivoro'
) {
  console.log('minhoca');
}
