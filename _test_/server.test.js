/**
 * @jest-environment node
 */
const app = require('../server/app');
const supertest = require('supertest');
const request = supertest(app);

const mongoose = require('mongoose');
mongoose.promise = global.Promise;
const Camp = require('../server/database/Camp.js');

describe('server test ', () => {
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/testDB`;

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  beforeEach(async () => {
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
        {
          url: 'www.fakeurl2.com',
          user: {
            username: 'Jing2',
            profile_pic_url: 'www.fakeavatar2.com',
          },
          description: 'This is a test2',
          thumbs: 10,
          date: '2020-05-26T07:31:49.717Z',
        },
      ],
    });

    await testCamp.save();
  });

  afterEach(async () => {
    await Camp.deleteMany();
  });

  afterAll(async () => {
    await Camp.drop();
    await mongoose.disconnect();
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
    done();
  });

  it('should respond with the campsite json object accordingly to the id', async (done) => {
    const response = await request.get('/site/1');
    expect(response.body[0].id).toEqual('1');
    expect(response.body[0].photos.length).toEqual(2);
    expect(response.statusCode).toBe(200);
    done();
  });

  it('should respond with the campsite json object accordingly to the id', async (done) => {
    const response = await request.get('/site/1');
    const photoid = response.body[0].photos[0]._id;
    const photo = await request.get(`/site/1/${photoid}`);

    expect(photo.body[0].photos.length).toEqual(1);
    expect(photo.body[0].photos[0].thumbs).toEqual(5);
    done();
  });
});
