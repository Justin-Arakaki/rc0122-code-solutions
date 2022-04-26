/* exported maxValue */

function maxValue(stack) {
  let max = stack.pop();
  if (max === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    max = Math.max(max, stack.pop());
  }
  return max;
}
