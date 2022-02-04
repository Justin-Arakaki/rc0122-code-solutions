/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.split(' ');
  let caps = '';
  for (let i = 0; i < words.length; i++) {
    if (i !== 0) {
      caps += ' ';
    }
    caps += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return caps;
}

// define function capitalizeWords with parameter string
// define variable words and assign with delimited data from string
// define variable caps and assign with empty string
// define for-loop that iterates through indexes of words
// define if-statement to check if not first index
// if true add space to caps
// increment caps with words at current index at string index 0 and make uppercase
// concatenate with words at current index with whole string sans the first char
// make lowercase
// return caps
