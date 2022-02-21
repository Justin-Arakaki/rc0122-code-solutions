/* exported calculator */
const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    let sum = 0;
    for (const x of numbers) {
      sum += x;
    }
    return sum;
  },
  getAverage: function (numbers) {
    let sum = 0;
    for (const x of numbers) {
      sum += x;
    }
    return sum / numbers.length;
  }
};
