const fs = require('fs');
const oldFile = process.argv[2];
const newFile = process.argv[3];

fs.readFile(oldFile, 'utf-8', (err, data) => {
  if (err) throw err;
  createFile(data);
});

function createFile(dataString) {
  fs.writeFile(newFile, dataString, 'utf-8', err => {
    if (err) throw err;
  });
}
