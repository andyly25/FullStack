const express = require('express');
const app = express();

// your code here!
app.get('/echo/:what', (req, res) => {
  // host, query, and params
  const someObj = {
    host: req.host,
    query: req.query,
    params: req.params
  };
  res.json(someObj);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
