const express = require('express');
const app = express();
const { add } = require('./math');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// route ใหม่
app.get('/sum/:a/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.send(`Sum = ${add(a, b)}`);
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
