let counter = 4;
const interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const elCountdown = document.querySelector('.countdown-display');
  if (counter !== 0) {
    elCountdown.textContent = counter--;
  } else {
    elCountdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}
