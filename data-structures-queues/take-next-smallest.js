/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let min = queue.dequeue();
  while (min > queue.peek()) {
    queue.enqueue(min);
    min = queue.dequeue();
  }
  return min;
}
