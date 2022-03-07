const elLeftBtn = document.querySelector('#left-button');
const elRightBtn = document.querySelector('#right-button');
const elNavDots = document.querySelector('#nav-dots');

elLeftBtn.addEventListener('click', handleClickLeftBtn);
elRightBtn.addEventListener('click', handleClickRightBtn);
elNavDots.addEventListener('click', handleClickNavDots);

let slot = 0;
let timer = setInterval(handleClickRightBtn, 3000);

function handleClickLeftBtn() {
  if (slot <= 0) {
    slot = 4;
  } else {
    slot--;
  }
  changePicture(slot);
}

function handleClickRightBtn() {
  if (slot >= 4) {
    slot = 0;
  } else {
    slot++;
  }
  changePicture(slot);
}

function handleClickNavDots(e) {
  for (let i = 0; i < elNavDots.children.length; i++) {
    if (elNavDots.children[i] === e.target) {
      changePicture(i);
    }
  }
}

function changePicture(slotNum) {
  const elPic = document.querySelector('#carousel-pic');
  switch (slotNum) {
    case 0:
      elPic.setAttribute('src', 'images/025.png');
      break;
    case 1:
      elPic.setAttribute('src', 'images/039.png');
      break;
    case 2:
      elPic.setAttribute('src', 'images/004.png');
      break;
    case 3:
      elPic.setAttribute('src', 'images/001.png');
      break;
    case 4:
      elPic.setAttribute('src', 'images/007.png');
      break;
  }
  changeActiveDot(slotNum);
  clearInterval(timer);
  timer = setInterval(handleClickRightBtn, 3000);
}

function changeActiveDot(slotNum) {
  for (let i = 0; i < elNavDots.children.length; i++) {
    if (i !== slotNum) {
      elNavDots.children[i].classList.remove('active');
    } else {
      elNavDots.children[i].classList.add('active');
    }
  }
}
