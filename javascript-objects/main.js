// The student Object
const student = {
  firstName: 'Justin',
  lastName: 'Arakaki',
  age: 28
};

const fullName = student.firstName + ' ' + student.lastName;

console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Mechanical Engineer';

console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);
console.log('student:', student);

// The vehicle Object
const vehicle = {
  make: 'Ford',
  model: 'Model T',
  year: 1908
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('color:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);

// The pet Object
const pet = {
  name: 'Sven',
  type: 'eldritch horror'
};

delete pet.name;
delete pet.type;

console.log('pet:', pet);
