/* exported truncate */
function truncate(length, string) {
  return string.substring(0, length) + '...';
}

// define function truncate with parameters 'length' and 'string'
// return substring from index 0 to length (exclusive) and concatenate with '...'
