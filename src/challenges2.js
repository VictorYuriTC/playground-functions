// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) { return 'Array com tamanho incorreto.'; }
  array.forEach((number) => {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  });
  const DDD = `(${array[0]}${array[1]})`;
  const fiveFirstNumbers = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  const fourLastNumbers = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  const telephoneNumber = `${DDD} ${fiveFirstNumbers}-${fourLastNumbers}`;
  return telephoneNumber;
}

const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

generatePhoneNumber(randomNumbers);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC)
    || lineB > (lineA + lineC)
    || lineC > (lineA + lineB)) { return false; }
  return true;
}

// Desafio 13
function hydrate() {

}

hydrate('12 cerveja, 2 cachaças');

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
