// The colors Array
const colors = ['red', 'white', 'blue'];

for (let i = 0; i < colors.length; i++) {
  console.log('colors[' + i + ']:', colors[i]);
}

const merica = 'America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';

console.log(merica);

colors[2] = 'green';
const mex = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';

console.log(mex);
console.log('colors', colors);

// The students Array
const students = ['Tim', 'Dave', 'Tom', 'Bartholomew'];
const numberOfStudents = students.length;
const statement = 'There are ' + numberOfStudents + ' students in the class.';

console.log(statement);

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];

console.log('lastStudent:', lastStudent);
console.log('students:', students);
