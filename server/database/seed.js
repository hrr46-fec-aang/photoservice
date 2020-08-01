const db = require('./index.js');
const Camp = require('./Camp.js');
const faker = require('faker');

var sampleImageUrl = [
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/will-truettner-QprJgwK27us-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/julie-kwak-ifmafgQhjMk-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/vincent-keiman-ul_m5dHThaM-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/shaqyl-shamsudheen-CFTcy_mN4ok-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/toni-benlliure--kFBs7CP_Oo-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/joshua-coleman-R1OSU00xo78-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/steve-halama-tNdSDsjTRTQ-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/paul-hermann-XJuhZqEE4Go-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/ridwan-kosasih-vXzSkC3-n5I-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/ethan-dow-zmA2gYoK844-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/ellen-auer-retQsZtCH8g-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/adrian-infernus-FAJr9FVJunQ-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/esther-tuttle-dyjH3YMblpo-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/bryan-carrillos-H5LgA9Knjp8-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/clay-banks-Ppz6b-YUDHw-unsplash.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1468245856972-a0333f3f8293.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1470246973918-29a93221c455.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1475483768296-6163e08872a1.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1496080174650-637e3f22fa03.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1496947850313-7743325fa58c.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1497386162420-3af67ede54e6.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1497710690711-5b997f14faac.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1529168586366-decec06e5501.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1533632359083-0185df1be85d.jpg',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/photo-1535846417087-ff0057791ecf.jpg',
];

var randomDataGenerator = function () {
  var result = [];
  for (var i = 1; i < 101; i++) {
    id = i;
    var photoarray = [];
    var photoCount = Math.floor(Math.random() * 5) + 5;
    for (var j = 0; j < photoCount; j++) {
      var photourlindex = Math.floor(Math.random() * sampleImageUrl.length);
      photoarray.push({
        url: sampleImageUrl[photourlindex],
        user: {
          username: faker.name.findName(),
          profile_pic_url: faker.image.avatar(),
        },
        description: faker.lorem.sentence(),
        thumbs: Math.floor(Math.random() * 20),
        date: faker.date.past(),
      });
    }
    var newCamp = {
      id: JSON.stringify(id),
      location: faker.address.streetName(),
      photos: photoarray,
    };
    result.push(newCamp);
    photoarray = [];
  }
  return result;
};

var randomData = randomDataGenerator();

var insertSampleCamp = function () {
  Camp.create(randomData)
    .then(() => db.close())
    .catch((err) => console.log('Error when seeding database'));
};
insertSampleCamp();
