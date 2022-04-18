const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (request, response) => {
  response.send('Hello World');
});

//app.listen(PORT, HOST);
app.listen(PORT);
console.log('Running on http://${HOST}:${PORT}');
