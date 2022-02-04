/* exported tail */
function tail(array) {
  const afterFirst = [];
  for (let i = 1; i < array.length; i++) {
    afterFirst.push(array[i]);
  }
  return afterFirst;
}

// define function tail with parameter array
// define variable afterFirst and assign with empty array
// define for-loop that iterates through indexes of array sans the first one
// add current value to afterFirst
// return afterFirst
