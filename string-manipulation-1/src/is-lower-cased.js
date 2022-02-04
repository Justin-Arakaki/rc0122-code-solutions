/* exported isLowerCased */
function isLowerCased(word) {
  for (const i in word) {
    if (word[i] === word[i].toUpperCase()) {
      if (word[i] === word[i].toLowerCase()) {
        continue;
      }
      return false;
    }
  }
  return true;
}

// define a function isLowerCased which will take parameter "word"
// define for loop to iterate through indexes of word
// in loop, define if-statement to check if current character is uppercase
// in if statement, define if-statement to check if that character is symbol
// if symbol break current iteration, else return false
// return true if it hasn't already returned false
