/* exported initial */
function initial(array) {
  const beforeLast = [];
  for (let i = 0; i < array.length - 1; i++) {
    beforeLast.push(array[i]);
  }
  return beforeLast;
}
