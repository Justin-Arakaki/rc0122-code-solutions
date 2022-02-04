/* exported numVowels */
function numVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    for (const j in vowels) {
      if (string[i].toLowerCase() === vowels[j]) {
        counter++;
      }
    }
  }
  return counter;
}
