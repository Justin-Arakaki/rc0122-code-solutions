/* exported compact */
function compact(array) {
  const truthies = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      truthies.push(array[i]);
    }
  }
  return truthies;
}
