/* exported oddOrEven */
function oddOrEven(numbers) {
  const oddsAndEvens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddsAndEvens.push('even');
    } else {
      oddsAndEvens.push('odd');
    }
  }
  return oddsAndEvens;
}
