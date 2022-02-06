/* exported defaults */
function defaults(target, source) {
  let detector = true;
  for (const x in source) {
    detector = true;
    for (const y in target) {
      if (x === y) {
        detector = false;
        break;
      }
    }
    if (detector) {
      target[x] = source[x];
    }
  }
}
