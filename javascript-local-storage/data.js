/* exported todos */

var todos = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
window.addEventListener('beforeunload', function () {
  const todoJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todoJSON);
});
