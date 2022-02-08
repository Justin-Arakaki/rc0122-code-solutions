const openButton = document.querySelector('.open');
const noButton = document.querySelector('.no');
const popup = document.querySelector('.popup');
openButton.addEventListener('click', popupEngaged);
noButton.addEventListener('click', popupEngaged);

function popupEngaged() {
  if (popup.id === 'hidden') {
    popup.id = '';
  } else {
    popup.id = 'hidden';
  }
}
