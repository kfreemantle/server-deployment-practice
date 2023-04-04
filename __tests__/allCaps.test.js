'use strict';

// per class, this is called Dependency Injection or importing.  We need to import the function we want to test into our testing file for Jest to work properly.

const allCaps = require('../middleware/allCaps/allCaps');

// describe, test and expect are methods attached to the core Jest functionality

describe('As a user I want to convert a string to all capital letters.', () => {

  
  // we start with testing the smallest possible units
  test('This should return the string in all caps', () => {
    let output = allCaps('kyle');
    expect(output).toEqual('KYLE');
  });
});