/* exported capitalize */
function capitalize(word) {
  const first = word[0].toUpperCase();
  const rest = word.toLowerCase();
  return first + rest.slice(1);
}
