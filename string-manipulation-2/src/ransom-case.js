/* exported ransomCase */
function ransomCase(string) {
  let ransom = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom += string[i].toLowerCase();
    } else {
      ransom += string[i].toUpperCase();
    }
  }
  return ransom;
}

// define function ransomCase with parameter 'string'
// define variable ransom and assign empty string
// define for-loop that iterates through indexes of string
// define if-statement to check if current index is even
// if true, concatenate lowercase of value at index
// else, concatenate uppercase of calue at index
// return ransom
