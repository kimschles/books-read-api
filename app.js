const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const bookDatabase = require('./connection');
const app = express();

app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.get('/api/v1/books', (req, res) => {
  bookDatabase('book')
    .select('*')
    .then(books => res.status(200).json(books))
    .catch(error => {
      res.status(500).json({ error: error.message, stack: error.stack });
    });
});

app.get('/api/v1/books/:id', (req, res) => {
  bookDatabase('book')
    .select('*')
    .limit(1)
    .where({ id: req.params.id })
    .then(book => res.status(200).json(book))
    .catch(error => {
      res.status(500).json({ error: error.message, stack: error.stack });
    });
});

app.listen(PORT, () => console.log('Example app is listening!'));
