const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const x in grades) {
    gradesArr.push(grades[x]);
  }
  res.json(gradesArr);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId++] = req.body;
  res.status(201).json(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening...');
});
