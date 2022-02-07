/* exported isPalindromic */
function isPalindromic(string) {
  const clean = string.replaceAll(' ', '');
  const center = Math.ceil(clean.length / 2);
  const upper = clean.slice(center);
  let lower;
  if (clean.length % 2 === 0) {
    lower = clean.slice(0, center).split('').reverse().join('');
  } else {
    lower = clean.slice(0, center - 1).split('').reverse().join('');
  }
  if (upper === lower) {
    return true;
  } else {
    return false;
  }
}

// define function isPalindromic with parameter string
// define variable clean and assign with string with no spaces
// define variable center and assign with number of half length of clean rounded up
// define variable upper and assign string upper half of clean starting with index center
// declare variable lower
// define if-statement that checks if clean has even number of characters
// if true, assign lower with string starting with index 0 of clean to center
// if false, assign lower with string starting with index 0 of clean to center - 1
// define if-statement to check if upper and lower are similar
// if true, return true
// if flase, return false
