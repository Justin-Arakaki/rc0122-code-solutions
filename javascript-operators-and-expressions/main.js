const width = 5;
const height = 3;
const area = width * height;

console.log('area:', area);
console.log('area type:', typeof area);

const bill = 20.55;
const payment = 25;
const change = payment - bill;

console.log('change:', change);
console.log('change type:', typeof change);

const quizzes = 95;
const midterm = 120;
const final = 10;
const grade = (quizzes + midterm + final) / 3;

console.log('grade:', grade);
console.log('grade type:', typeof grade);

const firstName = 'Justin';
const lastName = 'Arakaki';
const fullName = firstName + ' ' + lastName;

console.log('fullName:', fullName);
console.log('fullName type:', typeof fullName);

const pH = 7;
const isAcidic = pH < 7;

console.log('isAcidic:', isAcidic);
console.log('isAcidic type:', typeof isAcidic);

const headCount = 600000;
const isSparta = headCount === 300;

console.log('isSparta:', isSparta);
console.log('isSparta type:', typeof isSparta);

let motto = fullName;
motto = fullName + ' is the GOAT';

console.log('motto:', motto);
console.log('motto type:', typeof motto);
