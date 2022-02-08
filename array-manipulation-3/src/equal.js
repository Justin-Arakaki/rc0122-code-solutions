/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// define function equal with parameters first and second
// define if-statement that checks if first and second have same length
// if true, return false
// define for-loop that iterates thru first indexes
// define if-statement that checks if current element of first !== current element of second
// if true, return false
// if haven't already returned false, return true
