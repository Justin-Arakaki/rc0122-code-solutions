/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
    console.log(key);
  }
  return keys;
}

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
    console.log(key);
  }
  return values;
}

// console.log(getNumbersToTen());
// console.log(getNumbersToTen());
// console.log(getEvenNumbersToTwenty());
// console.log(getEvenNumbersToTwenty());
// console.log(repeatWord('javascript', 3));
// console.log(repeatWord('javascript', 3));
// logEachCharacter('javascript');
// console.log(doubleAll([5, 3, 7, 20.3, 100]));
// console.log(getKeys({ prop1: 234, prop2: 'der' }));
// console.log(getValues({ prop1: 234, prop2: 'der' }));
