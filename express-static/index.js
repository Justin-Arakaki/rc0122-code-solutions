const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');
const publicFiles = express.static(publicPath);

app.use(publicFiles);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
