/* exported takeRight */
function takeRight(array, count) {
  const right = [];
  const first = array.length - Math.min(count, array.length);
  for (let i = first; i < array.length; i++) {
    right.push(array[i]);
  }
  return right;
}
