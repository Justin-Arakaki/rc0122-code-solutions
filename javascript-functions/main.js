const zero = { firstName: 'Lelouche', lastName: 'Lamperouge' };
const iSell = ['propane', 'and', 'propane', 'accessories'];

console.log(convertMinutesToSeconds(5));
console.log(greet('Beavis'));
console.log(getArea(17, 42));
console.log(getFirstName(zero));
console.log(getLastElement(iSell));

function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return '"Hey, ' + name + '"';
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}
