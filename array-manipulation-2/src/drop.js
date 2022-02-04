/* exported drop */
function drop(array, count) {
  const tail = [];
  for (let i = count; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
}

// define function drop with parameters array and count
// define variable tail and assign with empty array
// define for-loop that iterates thru array starting at count
// push array value at current index to tail
// return tail
