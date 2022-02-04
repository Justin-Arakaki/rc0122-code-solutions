/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  const list = [];
  let word = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      list.push(word);
      word = '';
      continue;
    }
    word += string[i];
  }
  list.push(word);
  return list;
}

// define function getWords with parameter "string"
// define if-statement to check if empty string
// return [] if true
// define variable list and assign empty array
// define variable word and assign empty string
// define for-loop to iterate through indexes of string
// define if-statement to check if current character is ' '
// if true, add word to list, reset word, and break current iteration
// then, add current character to the end of word
// add word to list
// return list

// limitations:
// does not account for multiple spaces
