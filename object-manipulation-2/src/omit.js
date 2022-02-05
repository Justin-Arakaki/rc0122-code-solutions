/* exported omit */
function omit(source, keys) {
  const missing = {};
  for (const i in source) {
    for (let j = 0; j < keys.length; j++) {
      if (i === keys[j]) {
        break;
      }
      if (j === keys.length - 1) {
        missing[i] = source[i];
      }
    }
  }
  return missing;
}

// define function omit with parameters source and keys
// define variable missing and assign with empty object
// define for-loop that iterates thru source properties
// define for-loop that iterates thru keys indexes
// define if-statement to check if current property matches current index value
// if true break out
// define if-statement to check if last element in keys
// if true and loop hasn't broken then add current property to missing
