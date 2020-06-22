const request = require('supertest');
const app = require('../server/app');
const mongoose = require('mongoose');
const Camp = require('../server/database/Camp.js');
const db = require('../server/database/index.js');
describe('server test ', () => {
  // beforeAll(async () => {
  //   const url = `mongodb://127.0.0.1/testDB`;
  //   await mongoose.connect(url, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  // });

  // afterEach(async () => {
  //   await Camp.deleteMany();
  // });

  afterAll(async () => {
    await db.close();
  });

  it('should respond with the campsite json object accordingly to the id', async (done) => {
    // var testCamp = new Camp({
    //   id: '1',
    //   location: 'Texas',
    //   photos: [
    //     {
    //       url: 'www.fakeurl.com',
    //       user: {
    //         username: 'Jing',
    //         profile_pic_url: 'www.fakeavatar.com',
    //       },
    //       description: 'This is a test',
    //       thumbs: 5,
    //       date: '2020-04-23T07:31:49.717Z',
    //     },
    //   ],
    // });

    // await testCamp.save((err, camp) => {
    //   if (err) {
    //     console.log(err);
    //   }
    // });

    const response = await request(app).get('/site/110');
    expect(response.body[0].id).toEqual('110');
    expect(response.body[0].photos.length).toBeGreaterThanOrEqual(5);
    expect(response.body[0].photos.length).toBeLessThanOrEqual(10);
    expect(response.statusCode).toBe(200);
    done();
  });
});
