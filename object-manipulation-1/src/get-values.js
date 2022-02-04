/* exported getValues */
function getValues(object) {
  const values = [];
  for (const i in object) {
    values.push(object[i]);
  }
  return values;
}
