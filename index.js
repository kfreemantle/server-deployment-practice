'use strict'

const app = require('./server');

// Listening on port 3001, and printing a message to the console that it's up and listening if it runs successfully.
let PORT = 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

