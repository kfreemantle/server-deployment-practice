'use strict'

const express = require('express');
const cors = require('cors');
const allCaps = require('./allCaps/allCaps');

const app = express();  // this is called a singleton

app.use(cors());


app.get('/allCaps', function(request, response, next) {
  // query parameter goes here for testing later
  if (request.query.message) {
    let upperCase = allCaps(request.query.message);
    response.send(upperCase);
  } else {
    response.send('Error: no message sent.');
  }
});


// export for availability elsewhere
module.exports = app;