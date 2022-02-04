/* exported getValue */
function getValue(object, key) {
  for (const i in object) {
    if (i === key) {
      return object[i];
    }
  }
  return undefined;
}

// define function getValue with parameters 'object' and 'key'
// define for-loop that iterates through each property of object
// define if-statement to check if property matches key
// return current property value
// return undefined if haven't already returned a value
