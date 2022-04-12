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
function splitSentence() {

}

// Desafio 4
function concatName(names) {
  for (let index = 0; index < names.length; index += 1) {
    return names[index], names[0];
  }
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
