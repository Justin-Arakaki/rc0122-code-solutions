/* exported unique */
function unique(array) {
  const single = [];
  for (let i = 0; i < array.length; i++) {
    if (!single.includes(array[i])) {
      single.push(array[i]);
    }
  }
  return single;
}

// define function unique with parameter array
// define variable single and assign empty array
// define for-loop that iterates thru array indexes
// define if-statement that checks if single includes current array element
// if true push current array element in single
// return single
