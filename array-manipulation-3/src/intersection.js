/* exported intersection */
function intersection(first, second) {
  const sames = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      sames.push(first[i]);
    }
  }
  return sames;
}
