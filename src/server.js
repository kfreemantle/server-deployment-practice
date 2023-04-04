'use strict'


const express = require('express');
const cors = require('cors');
const allCaps = require('../middleware/allCaps/allCaps.js');

const app = express();  // this is called a singleton

app.use(cors());

// basic middleware for console logs. middlware in express follows the req/res/next format
function logger(request, response, next) {
  console.log('Express app hit!');
  next();
}

// app.use means it runs at the application level, meaning it runs no matter what route is being used in the request
app.use(logger);

app.post('/message', (request, response, next) => {
  response.send('You\'ve hit the message route.');
});


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