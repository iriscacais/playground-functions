// Desafio 1
const girafa = true;
const elefante = true;
const macaco = false;
function compareTrue(palavraUm, palavraDois) {
  if (palavraUm === true && palavraDois=== true){
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3

function splitSentence(frase) {
  let split = frase.split(' ');
  return split;
}

// Desafio 4
function concatName() {
 let ultimo = concatName.length -1;
 let primeiro = concatName[0];
 return ultimo + primeiro;
}


// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins*3;
  let empates = ties*1;
  return vitorias + empates;
}
console.log (footballPoints(0,0))
// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
