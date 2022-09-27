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
function concatName(nomes) {
  let primeiroNome = nomes[0];
  let ultimoNome = nomes[nomes.length-1];
 return ultimoNome + ', ' + primeiroNome;
}


// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins*3;
  let empates = ties*1;
  return vitorias + empates;
}

// Desafio 6

function highestCount(numeros) {
let contRepetido =0;
let contNumero =0;
let indexNumeroRepetido =0;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1<cat2){ 
  return 'cat1'
}else if (cat2 <cat1){
  return 'cat2'
}else if (cat1 === cat2 === mouse){
  return 'os gatos trombam e o rato foge'
}
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
