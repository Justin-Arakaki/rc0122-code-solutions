const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = parseFloat(process.argv[2]);
const operator = process.argv[3];
const num2 = parseFloat(process.argv[4]);
let result = null;

switch (operator) {
  case 'plus':
    result = add.sum(num1, num2);
    break;
  case 'minus':
    result = subtract.difference(num1, num2);
    break;
  case 'times':
    result = multiply.product(num1, num2);
    break;
  case 'over':
    result = divide.quotient(num1, num2);
    break;
  default:
    console.log('Operator not recognized');
}
console.log(`\n\tEquals ${result}\n`);
