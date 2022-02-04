/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const i in vowels) {
    if (char.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}

// define function isVowel which takes parameter "char"
// define variable vowels and assign it all the vowels
// define for-loop to iterate through indexes of vowels
// define if-statement to check if char is equal to current vowel
// return false if it hasn't returned true already
