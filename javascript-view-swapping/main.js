const $container = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
$container.addEventListener('click', function (e) {
  const dataView = e.target.getAttribute('data-view');
  if (e.target.matches('.tab')) {
    for (const x of $tab) {
      if (e.target === x) {
        x.className = 'tab active';
      } else {
        x.className = 'tab';
      }
    }
    for (const x of $view) {
      if (x.getAttribute('data-view') === dataView) {
        x.className = 'view';
      } else {
        x.className = 'view hidden';
      }
    }
  }
});
