const completed = document.querySelector('.completed');
const current = document.querySelector('.current');
const incomplete = document.querySelector('.incomplete');
const browser = document.querySelector('html');
browser.addEventListener('keydown', tutorial);

function tutorial(event) {
  if (incomplete.textContent !== '') {
    if (event.key === current.textContent) {
      completed.textContent += current.textContent;
      current.textContent = incomplete.textContent[0];
      incomplete.textContent = incomplete.textContent.slice(1);
      current.className = 'current';
    } else {
      current.className = 'current incorrect';
    }
  } else {
    current.className = 'completed';
  }
}
