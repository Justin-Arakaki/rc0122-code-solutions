/* exported take */
function take(array, count) {
  const front = [];
  for (let i = 0; i < Math.min(count, array.length); i++) {
    front.push(array[i]);
  }
  return front;
}

// define function take with parameters array and count
// define variable front and assign empty array
// define for-loop that iterates through array indexes up to count or array length
// whichever is smallest
// push array value at current index to front
// return front
