'use strict'

const express = require('express');
const cors = require('cors');

const app = express();  // this is called a singleton

app.use(cors());


app.get('/placeholder', function(request, response, next) {
  // query parameter goes here for testing later
  if (request.query.message) {
    let testMessage = placeholder(request.query.message);
    response.send(testMessage);
  } else {
    response.send('Error: no message sent.');
  }
});


// export for availability elsewhere
module.exports = app;