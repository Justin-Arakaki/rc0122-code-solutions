function ExampleConstructor() {
  // constructor stuff
}

const myFunction = new ExampleConstructor();
const isInstance = myFunction instanceof ExampleConstructor;

console.log('ExampleConstructor', ExampleConstructor.prototype);
console.log('ExampleConstructor type', typeof ExampleConstructor.prototype);
console.log('myFunction', myFunction);
console.log('isInstance', isInstance);
