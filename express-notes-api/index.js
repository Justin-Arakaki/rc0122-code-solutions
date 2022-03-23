const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();
const notes = data.notes;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const x in notes) {
    notesArr.push(notes[x]);
  }
  res.json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || !id) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (notes[id]) {
    res.json(notes[id]);
  } else {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    notes[data.nextId] = {
      id: data.nextId,
      content: req.body.content
    };
    data.nextId++;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
        return;
      }
      res.json(notes[data.nextId - 1]);
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || !id) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[id]) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  } else {
    delete notes[id];
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
        return;
      }
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || !id) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!notes[id]) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  } else {
    notes[id].content = req.body.content;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
        return;
      }
      res.json(notes[id]);
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening...');
});
