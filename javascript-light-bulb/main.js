const background = document.querySelector('body');
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
let on = true;
inner.addEventListener('click', bulb);

function bulb() {
  if (on === true) {
    background.style.backgroundColor = 'rgb(17 17 17)';
    outer.style.backgroundColor = 'rgb(12 12 12)';
    inner.style.backgroundColor = 'rgb(35 36 37)';
    on = false;
  } else {
    background.style.backgroundColor = 'white';
    outer.style.backgroundColor = 'white';
    inner.style.backgroundColor = 'rgb(250 234 132)';
    on = true;
  }
}
