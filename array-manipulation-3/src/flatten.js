/* exported flatten */
function flatten(array) {
  const flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flat.push(array[i][j]);
      }
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}

// define flatten with parameter array
// define variable flat with empty array
// define for-loop that iterates thru array indexes
// define if-statement that checks if current element is and array
// for true,
// define for-loop that iterates thru 'array' array indexes
// push 'array' array element to flat
// for false,
// push current array element to flat
// return flat
