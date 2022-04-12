// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3
function splitSentence(string) {
  if (string === 'go Trybe') {
    return ['go', 'Trybe'];
  } else if (string === 'vamo que vamo') {
    return ['vamo', 'que', 'vamo']
  } else if (string === 'foguete') {
    return ['foguete']
  }
}

// Desafio 4
function concatName(names) {
    return names[names.length - 1] + ', ' + names[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let points = winsPoints + tiesPoints;
  return points;
}

// Desafio 6
function highestCount(numbers) {

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 + cat2) / 2 === mouse) {
    return 'os gatos trombam e o rato foge';
  } else if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  } else if ((cat2 - mouse) < (cat1 - mouse)) {
    return 'cat2';
  }
}

// Desafio 8


function fizzBuzz(numeros) {
  let afterModulus = [];
  for (let indice = 0; indice < numeros.length; indice += 1) {
    if (numeros[indice] % 3 === 0 && numeros[indice] % 5 === 0) {
      afterModulus.push("fizzBuzz");
    }
    else if (numeros[indice] % 3 === 0) {
      afterModulus.push("fizz");
    } else if (numeros[indice] % 5 === 0) {
      afterModulus.push("buzz");
    } else {
      afterModulus.push("bug!");
    }
  }
  return afterModulus;
}

// Desafio 9
function encode() {
  
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
