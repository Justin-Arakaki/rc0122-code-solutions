/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let rep1 = secondIndex;
  let rep2 = firstIndex;
  let index1 = firstIndex;
  let index2 = secondIndex;
  if (secondIndex === Math.min(firstIndex, secondIndex)) {
    rep1 = firstIndex;
    rep2 = secondIndex;
    index1 = secondIndex;
    index2 = firstIndex;
  }
  let swap = string.substring(0, index1);
  swap += string[rep1];
  swap += string.substring(index1 + 1, index2);
  swap += string[rep2];
  swap += string.substring(index2 + 1, string.length);
  return swap;
}
