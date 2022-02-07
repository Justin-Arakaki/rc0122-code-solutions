/* exported difference */
function difference(first, second) {
  const diffs = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      diffs.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      diffs.push(second[i]);
    }
  }
  return diffs;
}
