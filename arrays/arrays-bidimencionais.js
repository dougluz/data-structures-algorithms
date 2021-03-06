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
 * Método Keys devolve @@iterator que contém chaves do array
 */
const aKeys = numbers.keys();
console.log(aKeys.next()) // { value: 0, done: false}
console.log(aKeys.next()) // { value: 1, done: false}
console.log(aKeys.next()) // { value: 2, done: false}

/**
 * Método from cria outro array a partir de um array existente
 */
let numbers2 = Array.from(numbers)

// mapeando para retornar apenas os valores que deseja
let evens = Array.from(numbers, x => (x % 2 == 0))

/**
 * Método from cria um array a partir dos argumentos passados
 */
let numbers3 = Array.of(1)
let numbers4 = Array.of(1, 2, 3, 4, 5, 6)
// mesmo que
numbers3 = [1]
numbers4 = [1, 2, 3, 4, 5, 6]

// também é possivel utilizar esse método para copiar outro array por ex
let numbersCopy = Array.of(...numbers4)

/**
 * método fill preenche um array com sos parametros passados
 */
numbersCopy = Array.of(1, 2, 3, 4, 5, 6)

numbersCopy.fill(0) // [0,0,0,0,0,0]

// também é possivel passar um indice de inicio para o preenchimento
numbersCopy.fill(2, 1) // [0,2,2,2,2,2]

numbersCopy.fill(1, 3, 5) // [0,2,2,1,1,2]

// inicializando um array e inserindo valores
let ones = Array(6).fill(1)

/**
 * Método copyWithin
 * permite copiar uma sequencia de valores de um array
 */
let copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(0, 3)
// copiar os valores 4 e 5 (posições 3 e 4) para as posições 1 e 2
copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(1, 3, 5) // [1,4,5,4,5,6]

/** ORDENANDO ELEMENTOS */

numbers.reverse() // ira reverter a ordem do array

numbers.sort(); // resultado sera [1,10,11,12,14.....2, 3, 4]

numbers.sort((a, b) => a - b)

// o codigo anterior tambem pode ser representado por
function compare(a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}
numbers.sort(compare)

/** ordenação personalizada
 * 
 * ordenando pessoas pela idade
 */

const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 },
]
function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1
  }
  if (a.age > b.age) {
    return 1
  }
  return 0
} // retornara Ana(20), Chris(25), John(30)

/** ORDENANDO STRINGS */

let names = ['Ana', 'ana', 'john', 'John']
console.log(names.sort()) // [Ana, John, ana, John]
// ocorre pq o js compara os caracteres com base na tabela ASCII

console.log(names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1
  }
  return 0
}))

// se quisermos que as letras minisculas venham antes
names.sort((a, b) => a.localeCompare(b)) // [ana, Ana, john, John]

// para caracteres com acendo utilizar localeCompare também
const names2 = ['Maève', 'Maeve']
console.log(names2.sort((a, b) => a.localeCompare(b))) // [Maeve, Maève]

/** PESQUISA */

console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10)
console.log(numbers.lastIndexOf(10))
console.log(numbers.lastIndexOf(100))

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

/** Metodos find e findIndex 
 * 
 * Os metodos find e findindex irao receber uma funcao de callback
 * que buscara um valor que satisfaça a condicao presente na funcao de callback
 * 
*/
function multipleOf13(element, index, array) {
  return (element % 13 == 0)
}

// devolve o primeiro valor
console.log(numbers.find(multipleOf13));

// devolve o indice do primeiro valor que satisfaça a condição
console.log(numbers.findIndex(multipleOf13))

/** método includes
 * 
 * retorna true se encontrar e false se nao encontrar
 */
console.log(numbers.includes(15))
console.log(numbers.includes(20))

// definindo indice de inicio de onde a pesquisa deve começar
let numbers2 = [7, 6, 5, 4, 3, 2, 1]
console.log(numbers2.includes(4, 5))

/** Convertendo array em string */

console.log(numbers.toString())
