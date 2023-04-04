'use strict';

const supertest = require('supertest');

const app = require('./server.js');
const request = supertest(app);

// the describe->test->expect nomenclature are built in methods within Jest for testing purposes.

describe('As a user I want to send a request and get the result in all caps.', () => {

  test ('Should return string of all caps when I send a GET request to /allCaps', async () => {
    let response = await request.get('/allCaps?message=kyle');
    expect(response.text).toEqual('KYLE')
  });
});