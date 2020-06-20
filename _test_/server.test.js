const request = require('supertest');
const app = require('../server/app');
const mongoose = require('mongoose');
const Camp = require('../server/database/Camp.js');

describe('server test ', () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
    const url = `mongodb://127.0.0.1/testDB`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterEach(async () => {
    await Camp.deleteMany();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should respond with the campsite json object accordingly to the id', async (done) => {
    var testCamp = new Camp({
      id: '1',
      location: 'Texas',
      photos: [
        {
          url: 'www.fakeurl.com',
          user: {
            username: 'Jing',
            profile_pic_url: 'www.fakeavatar.com',
          },
          description: 'This is a test',
          thumbs: 5,
          date: '2020-04-23T07:31:49.717Z',
        },
      ],
    });

    await testCamp.save((err, camp) => {
      if (err) {
        console.log(err);
      }
    });

    const response = await request(app).get('/1');
    expect(response.body[0].location).toEqual('Texas');
    expect(response.body[0].photos.length).toEqual(1);
    expect(response.statusCode).toBe(200);
    done();
  });
});
