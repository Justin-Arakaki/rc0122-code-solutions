/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const cleanFirst = firstString.replaceAll(' ', '').split('');
  const cleanSecond = secondString.replaceAll(' ', '').split('');
  let found;
  if (cleanFirst.length !== cleanSecond.length) {
    return false;
  }
  for (const x of cleanFirst) {
    found = cleanSecond.indexOf(x);
    if (found === -1) {
      return false;
    } else {
      cleanSecond.splice(found, 1);
    }
  }
  return true;
}

// define function isAnagram with parameters firstString and secondString
// define variable cleanFirst and assign with
// array of elements of firstString with no spaces
// define variable cleanSecond and assign with
// array of elements of secondString with no spaces
// declare variable found
// define if-statement to check if lengths of cleanFirst and cleanSecond are the same
// if true, return false
// define for-loop and iterate thru each element of cleanFirst
// assign index of found element in cleanSecond to found
// define if-statement that checks if found === -1
// if true, return false
// if false, remove found element from cleanSecond
// return true if haven't already returned false
