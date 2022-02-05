/* exported includes */
function includes(array, value) {
  for (const i in array) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// define function includes with parameters array and value
// define for-loop that iterates through indexes in array
// define if-statement to check if value in current index equals value
// if true return true
// return false if return true never executes
