/* exported invert */
function invert(source) {
  const switcharoo = {};
  for (const i in source) {
    switcharoo[source[i]] = i;
  }
  return switcharoo;
}
