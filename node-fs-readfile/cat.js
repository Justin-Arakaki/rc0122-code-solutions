const fs = require('fs');
const numFiles = process.argv.length - 2;
const files = [];
let counter = 1;

for (let i = 2; i < process.argv.length; i++) {
  const file = process.argv[i];
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    files[i - 2] = data;
    if (counter === numFiles) {
      printFiles();
    }
    counter++;
  });
}

function printFiles() {
  console.log('\n--- OUTPUT ---');
  for (let i = 0; i < numFiles; i++) {
    console.log(files[i].slice(0, 50) + '...');
  }
  console.log('');
}
