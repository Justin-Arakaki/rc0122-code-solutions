// The Math Object
const x = 5;
const y = 90;
const z = 48;
const maximumValue = Math.max(x, y, z);

console.log('maximumValue:', maximumValue);

const heroes = [
  'Doctor Strange',
  'Batman',
  'Static Shock',
  'Iron Man'
];

let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log(randomHero);

// Array Methods
const library = [
  {
    title: 'The Call of Cthulhu',
    author: 'H. P. Lovecraft'
  },
  {
    title: 'The Library at Mount Char',
    author: 'Scott Hawkins'
  },
  {
    title: 'The Ballad of Black Tom',
    author: 'Victor Lavalle'
  }
];

const lastBook = library.pop();

console.log('lastBook:', lastBook);

const firstBook = library.shift();

console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

// String Methods
const fullName = 'Justin Arakaki';
const firstAndLastName = fullName.split(' ');

console.log(firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
