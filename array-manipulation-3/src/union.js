/* exported union */
function union(first, second) {
  const combine = first;
  for (let i = 0; i < second.length; i++) {
    if (!combine.includes(second[i])) {
      combine.push(second[i]);
    }
  }
  return combine;
}
