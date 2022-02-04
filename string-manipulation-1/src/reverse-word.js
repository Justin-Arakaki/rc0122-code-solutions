/* exported reverseWord */
function reverseWord(word) {
  let reversed = '';
  for (let i = 0; i < word.length; i++) {
    reversed = word[i] + reversed;
  }
  return reversed;
}

// define function reverseWord with parameter 'word'
// define variable reversed with empty string
// define for-loop that iterates through indexes of word
// concatenate current character with reversed and assign to reversed
// return reversed
