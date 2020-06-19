const request = require('supertest');
const app = require('../server/app');

describe('GET /:campid ', () => {
  test('It should respond with the campsite json object accordingly to the id', async () => {
    const response = await request(app).get('/1');
    expect(response.body.location).toEqual('Mann Trail');
    expect(response.body.photos.length).toEqual(6);
    expect(response.statusCode).toBe(200);
  });
});
