const request = require('supertest');
// we also need our app for the correct routes!
const app = require('../server/app');

test('It adds two numbers', () => {
  expect(1 + 1).toBe(2);
});
