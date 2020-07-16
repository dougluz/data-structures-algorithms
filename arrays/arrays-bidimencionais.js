/**
 * Iterando pelos elementos de arrays bidimensionais
 * 
 * @var myMatryx array bidimensional
*/
function printMatrix(myMatryx) {
  for (let i = 0; i < myMatryx.length; i++) {
    for (let j = 0; j < myMatryx[i].length; j++) {
      console.log(myMatryx[i][j])
    }
  }
}

printMatrix(averageTemp)

/**
 * Interando em array multidimensional onde cada célula contém
 * a soma i (linha) + j (coluna) + z (profundidade)
 */
const matrix3x3x3 = [];
for (let i = 0; i < array.length; i++) {
  matrix3x3x3[i] = [] //inicializando cada array
  for (let j = 0; j < 3; j++) {
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z
    }
  }
}

/** exibindo o conteúdo de matrix 3 x 3 x 3 */
for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
      console.log(matrix3x3x3[i][j][z])
    }
  }
}

/**
 * juntando arrays utilizando a função concat
 */
const zero = 0
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-1, -2, -3];
let numbers = negativeNumbers.concat(0, positiveNumbers);

/** Iterando em arrays
 *
 * @param x array of numbers
 */
