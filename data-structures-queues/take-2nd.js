/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  if (first === undefined) {
    return;
  }
  const second = queue.dequeue();
  queue.enqueue(first);
  if (second === undefined) {
    return first;
  }
  return second;
}
