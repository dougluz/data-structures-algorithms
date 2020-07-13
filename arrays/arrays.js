// inserindo elementos no final de um array

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10;

// utilizando método push
numbers.push(11);
numbers.push(12, 13);

// =============================== INSERINDO ELEMENTO NA PRIMEIRA POSIÇÃO ==============================
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};
numbers.insertFirstPosition(-1);

// utilizando método unshift

numbers.unshift(-2);
numbers.unshift(-4, -3);

// =============================== REMOVENDO ELEMENTO DA ÚLTIMA POSIÇÃO ====================================
numbers.pop();

// =============================== REMOVENDO ELEMENTO DA PRIMEIRA POSIÇÃO ====================================
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}

Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

Array.prototype.removeFirstPosition = function () {
  for (let index = 0; index < this.length; index++) {
    this[i] = array[index + 1];
  }
  return this.reIndex(this);
};

numbers = numbers.removeFirstPosition();

// utilizando o metodo shift
numbers.shift();

// =============================== REMOVENDO ELEMENTO DE QUALQUER POSIÇÃO =========================================

numbers.splice(5, 3);

// =============================== INSERINDO ITEMS NO ARRAY NA POSIÇÃO DESEJADA ===================================

// primeiro argumento indica indice a partir do qual queremos inserir os elementos
// segundo argumento indica a quantidade de itens que queremos remover
// terceiro elemento em diante os valores que desejamos inserir
numbers.splice(5, 0, 2, 3, 4);

numbers.splice(5, 3, 2, 3, 4);
