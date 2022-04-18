'use strict';

const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (request, response) => {
  request.send('Hello World');
});

#app.listen(PORT, HOST);
server.listen(8000);
console.log('Running on http://${HOST}:${PORT}');
