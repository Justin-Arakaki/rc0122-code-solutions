/* exported dropRight */
function dropRight(array, count) {
  const left = [];
  for (let i = 0; i < array.length - count; i++) {
    left.push(array[i]);
  }
  return left;
}
