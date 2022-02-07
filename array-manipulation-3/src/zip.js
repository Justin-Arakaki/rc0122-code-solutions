/* exported zip */
function zip(first, second) {
  const pairs = [];
  for (let i = 0; i < Math.min(first.length, second.length); i++) {
    pairs.push([first[i], second[i]]);
  }
  return pairs;
}

// define function zip with parameters first and second
// define variable pairs and assign empty array
// define for loop that iterates thru minimum of first and second indexes
// push single array containing current first and second elements into pairs
// return pairs
