/* exported getKeys */
function getKeys(object) {
  const keys = [];
  for (const i in object) {
    keys.push(i);
  }
  return keys;
}

// define function getKeys with parameter 'object'
// define keys and assign empty array
// define for-loop that iterates through every key of object
// push key into keys
// return keys
