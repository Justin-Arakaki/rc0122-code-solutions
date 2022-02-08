const openButton = document.querySelector('.open');
const noButton = document.querySelector('.no');
const popup = document.querySelector('.popup');
openButton.addEventListener('click', popupEngaged);
noButton.addEventListener('click', popupEngaged);

function popupEngaged() {
  if (popup.className === 'popup hidden') {
    popup.className = 'popup';
  } else {
    popup.className = 'popup hidden';
  }
}
