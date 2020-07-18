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
const isEven = x => x % 2 === 0
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

/** iterando com o método every
 * 
 * Retornará false, pois o primeiro item do array é 1 e isso parará a execução
 */
numbers.every(isEven)

/**
 * Iterando com o método some
 * Contrário do método every, parará no 2, que é o primeiro true
 */
numbers.some(isEven)

/**
 * Iterando com forEach
 */
numbers.forEach(number => console.log(isEven(number)));

/**
 * Iterando utilizando o map
 * retornará um novo array com os valores false e true
 */
const myMap = numbers.map(isEven)

/**
 * Iterando utilizando o filter
 * retornará apenas os true nesse caso
 * [2, 4, 6, 8....]
 */
const evenNumbers = numbers.filter(isEven)

/**
 * Iterando com o reduce
 * retornará a soma do array
 */

numbers.reduce((previous, current) => previous + current)
/**
 * Iterando utilizando for of
 */
for (const n of numbers) {
  console.log(n % 2 === 0 ? 'even' : 'odd')
}

/**
 * Utilizando o método @@iterator 
 */
let iterator = numbers[Symbol.iterator]()

console.log(iterator.next().value) //1
console.log(iterator.next().value) //2
console.log(iterator.next().value) //3
console.log(iterator.next().value) //4
console.log(iterator.next().value) //5

iterator = numbers[Symbol.iterator]()
for (const n of iterator) {
  console.log(n)
}

/**
 * Método entries
 */
let aEntries = numbers.entries()
console.log(aEntries.next().value) // [0, 1] - posição 0 valor 1
console.log(aEntries.next().value) // [1, 2] - posição 1 valor 2
console.log(aEntries.next().value) // [2, 3] - posição 2 valor 3


aEntries = numbers.entries()
for (const n of aEntries) {
  console.log(n);
}

/**
 * Método Keys devolve @@iterator
 */
