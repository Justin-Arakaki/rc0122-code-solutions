/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const full = [];
  for (let i = 0; i < words.length; i++) {
    full[i] = words[i] + suffix;
  }
  return full;
}
