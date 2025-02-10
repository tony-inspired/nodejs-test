const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('TEST');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
