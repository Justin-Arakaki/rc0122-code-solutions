/* exported chunk */
function chunk(array, size) {
  const big = [];
  let small = [];
  for (let i = 0; i < array.length; i++) {
    small.push(array[i]);
    if ((i + 1) % size === 0) {
      big.push(small);
      small = [];
    } else if (i === array.length - 1) {
      big.push(small);
    }
  }
  return big;
}
