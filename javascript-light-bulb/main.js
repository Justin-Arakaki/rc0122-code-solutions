const background = document.querySelector('body');
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
let on = true;
inner.addEventListener('click', bulb);

function bulb() {
  if (on === true) {
    background.className = 'body-off';
    outer.className = 'outer outer-off';
    inner.className = 'inner inner-off';
    on = false;
  } else {
    background.className = '';
    outer.className = 'outer';
    inner.className = 'inner';
    on = true;
  }
}
