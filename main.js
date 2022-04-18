const express = require('express');

// Constants
const PORT = 8000;

// App
const app = express();
app.get('/', (request, response) => {
  response.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`This app is listening at http://localhost:${PORT}`)
})
