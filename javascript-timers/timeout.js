setTimeout(changeMessage, 2000);

function changeMessage() {
  const elMessage = document.querySelector('.message');
  elMessage.textContent = 'Hello There';
}
