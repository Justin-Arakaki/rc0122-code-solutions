/* exported pick */
function pick(source, keys) {
  const prop = {};
  for (const i in source) {
    if (source[i] === undefined) {
      continue;
    }
    for (const j in keys) {
      if (keys[j] === i) {
        prop[i] = source[i];
        continue;
      }
    }
  }
  return prop;
}

// define function pick with parameters source and keys
// define prop and assign empty object
// define for-loop that iterates thru keys in source
// define if-statement to check if current property is undefined
// continue if true
// define for-loop that iterates thru indexes in keys
// define if statement to check if value of keys in current index equals current property
// if true, add property of source to prop
// return prop
