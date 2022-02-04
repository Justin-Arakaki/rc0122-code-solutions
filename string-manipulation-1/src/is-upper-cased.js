/* exported isUpperCased */
function isUpperCased(word) {
  for (const i in word) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
