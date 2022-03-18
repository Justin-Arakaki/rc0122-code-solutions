const fs = require('fs');
const random = Math.random() + '\n';
fs.writeFile('random.txt', random, 'utf8', err => {
  if (err) throw err;
});
