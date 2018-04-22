const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/books', (req, res) => res.send('Hello Books!'));

app.listen(PORT, () => console.log('Example app is listening!'));
