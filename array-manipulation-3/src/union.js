/* exported union */
function union(first, second) {
  const combine = [];
  for (let i = 0; i < first.length; i++) {
    combine.push(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    if (!combine.includes(second[i])) {
      combine.push(second[i]);
    }
  }
  return combine;
}
union(
  ['a', 'link', 'to', 'the', 'past'],
  ['the', 'adventure', 'of', 'link']
);
