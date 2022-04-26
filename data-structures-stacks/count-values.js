/* exported countValues */

function countValues(stack) {
  let counter = 0;
  while (stack.peek() !== undefined) {
    counter++;
    stack.pop();
  }
  return counter;
}
