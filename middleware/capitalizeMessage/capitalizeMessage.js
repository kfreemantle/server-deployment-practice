'use strict';

function capitalizeMessage(request, response, next) {
  if (!request.query.message) {
    next('Error: no message attached.');
  } else {
    request.query.message = request.query.message.toUpperCase();
    next();
  } 
}

module.exports = capitalizeMessage;
