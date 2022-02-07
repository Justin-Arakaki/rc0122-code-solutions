const clickMe = document.querySelector('.click-button');
const hoverMe = document.querySelector('.hover-button');
const dblClickMe = document.querySelector('.double-click-button');
clickMe.addEventListener('click', handleClick, false);
hoverMe.addEventListener('mouseover', handleMouseover, false);
dblClickMe.addEventListener('dblclick', handleDoubleClick, false);

function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
