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
  return resultado
}
// Desafio 7 nao
function catAndMouse(mouse, cat1, cat2) {
let distanciaCat1 = Math.abs(mouse - cat1);
let distanciaCat2 = Math.abs(mouse - cat2);
if (distanciaCat2 < distanciaCat1){
return 'cat2'
}else if (distanciaCat1 < distanciaCat2){
  return 'cat1'
}else if (distanciaCat1 === distanciaCat2){
  return 'os gatos trombam e o rato foge'
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
   let resultado =[];
    
for(let key in palavra){
      if (palavra[key]=== 'a'){
     resultado.push(1);
      }else if (palavra[key]=== 'e'){
        resultado.push(2);
      }else if (palavra[key]=== 'i'){
      resultado.push(3);
    }else if (palavra[key] === 'o'){
      resultado.push(4);
    }else if (palavra[key] === 'u'){
      resultado.push(5);
    }else{
      resultado.push(palavra[key])
    }
  }
  return resultado.join('')
  }

function decode(palavra) {
  let resultado =[];
    
  for(let key in palavra){
        if (palavra[key]=== '1'){
       resultado.push('a');
        }else if (palavra[key]=== '2'){
          resultado.push('e');
        }else if (palavra[key]=== '3'){
        resultado.push('i');
      }else if (palavra[key] === '4'){
        resultado.push('o');
      }else if (palavra[key] === '5'){
        resultado.push('u');
      }else{
        resultado.push(palavra[key])
      }
    }
    return resultado.join('')
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
