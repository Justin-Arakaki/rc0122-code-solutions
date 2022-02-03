/* exported countdown */
function countdown(number) {
  const nums = [];
  for (let i = 0; i <= number; i++) {
    nums.push(number - i);
  }
  return nums;
}
