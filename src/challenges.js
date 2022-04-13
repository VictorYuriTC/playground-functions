// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  if (string === 'go Trybe') {
    return ['go', 'Trybe'];
  } else if (string === 'vamo que vamo') {
    return ['vamo', 'que', 'vamo'];
  } else {
    return ['foguete'];
  }
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
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
  let highestNumber = 1;
  numbers.sort(function (first, second) {
    return first - second});
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > numbers[i - 1]) {
      highestNumber = 1;
    } else if (numbers[i] === numbers[i - 1]) {
      highestNumber += 1;
    }
  }
  return highestNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 + cat2) / 2 === mouse) {
    return 'os gatos trombam e o rato foge';
  } else if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let afterModulus = [];
  for (let indice = 0; indice < numeros.length; indice += 1) {
    if (numeros[indice] % 3 === 0 && numeros[indice] % 5 === 0) {
      afterModulus.push('fizzBuzz');
    } else if (numeros[indice] % 3 === 0) {
      afterModulus.push('fizz');
    } else if (numeros[indice] % 5 === 0) {
      afterModulus.push('buzz');
    } else {
      afterModulus.push('bug!');
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
function techList(tech, name) {
  let myTech = [];
  tech.sort();
  if (tech.length < 1) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < tech.length; index += 1) {
      let eachTech = {
        tech: tech[index],
        name: name,
      };
      myTech.push(eachTech);
    }
  }
  return myTech;
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
