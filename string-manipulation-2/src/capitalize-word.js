/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  const tail = word.slice(1);
  return word[0].toUpperCase() + tail.toLowerCase();
}

// define capitalizeWord with parameter 'word'
// define if-statement to check for 'javascript' (make lowercase)
// return "JavaScript"
// define variable tail and assign with word except for first character
// return first index of word made uppercase and concatenate with tail
