const express = require('express');
const app = express();
const port = 3010;



app.get('/api', (req, res) => {
  res.send('TEST');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
