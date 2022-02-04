/* exported reverse */
function reverse(array) {
  const backwards = [];
  for (let i = 0; i < array.length; i++) {
    backwards.unshift(array[i]);
  }
  return backwards;
}
