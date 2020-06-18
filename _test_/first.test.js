const request = require('supertest');
// we also need our app for the correct routes!
const app = require('../server/app');

test('It adds two numbers', () => {
  expect(1 + 1).toBe(2);
});

describe('GET /hello ', () => {
  test('It should respond with hello world', async () => {
    const response = await request(app).get('/hello');
    expect(response.body).toEqual('Hello World');
    expect(response.statusCode).toBe(200);
  });
});
