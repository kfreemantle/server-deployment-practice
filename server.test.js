'use strict';

const supertest = require('supertest');

const app = require('./server.js');
const request = supertest(app);

// the describe->test->expect nomenclature are built in methods within Jest for testing purposes.

describe('As a user I want to send a request and get a specific result.', () => {
  test ('Testing string and expected results.', async () => {
    let response = await request.get('/placeholder?message=string');
    expect(response.text).toEqual('expectedResult')
  })
})