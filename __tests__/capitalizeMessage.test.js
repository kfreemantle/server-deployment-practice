'use strict';

const capitalizeMessage = require("../middleware/capitalizeMessage/capitalizeMessage");

describe('Testing the capitalizeMessage middleware', () => {
  test('Should capitalize the message and pass it to the next middleware', () => {
    const request = {
      query: {
        message: "Kyle"
      }
    };
    const response = {};
    // we don't want to build the next function, we just need to check and see if it's called
    const next = jest.fn(); // this is a built in spy function to jest

    capitalizeMessage(request, response, next);
    expect(request.query.message).toEqual('KYLE');
    expect(next).toHaveBeenCalled();
  });
});