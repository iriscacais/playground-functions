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
//let contRepetido =[0];
let maior = 0;
let resultado =0;
for (let key in numeros){
  if (numeros[key]> maior || numeros[key]<0){
    maior = numeros[key]
  }
  }
     for(let key2 in numeros){
  if (numeros[key2] === maior){
    resultado +=1
     
  }}
   console.log(resultado)
  return resultado
}
// Desafio 7 nao
function catAndMouse(mouse, cat1, cat2) {
if (mouse <cat2 && cat2<cat1){
return 'cat2'
}else if (mouse==cat1 && mouse==cat2){
  return 'os gatos trombam e o rato foge'
}else if (mouse > cat1 && cat1 < cat2){
  return 'cat1'
}
}

// Desafio 8 

function fizzBuzz(numeros) {
  let arrayStrings =[ ];
  for(let key in numeros){
    if (numeros[key]%3===0 && numeros[key]%5===0){
arrayStrings.push('fizzBuzz')
    } else if (numeros[key]%5===0){
    arrayStrings.push('buzz')
}else if (numeros[key]%3===0){  
arrayStrings.push('fizz')
}else{
  arrayStrings.push('bug!')
}
}return arrayStrings
}

// Desafio 9

function encode(palavra) {
   let vogais = palavra.split('');
   codigo = [{
    a:1,
    e:2,
    i:3,
    o:4,
    u:5,
    }]
    
for(let key in vogais){
    for (let key2 in codigo){
      if (codigo[key2]===vogais[key]){
     vogais[key] = codigo[key2];
      }
    }
  }//console.log(vogais)
}//console.log(encode('hi there!'))


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
