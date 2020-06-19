const db = require('./index.js');
const Camp = require('./Camp.js');
const faker = require('faker');

var sampleImageUrl = [
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/IMG_0145.JPG',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/IMG_0239.JPG',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/IMG_0347.JPG',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/IMG_0409.JPG',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/IMG_0410.JPG',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/IMG_0411.JPG',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/IMG_0438.JPG',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/IMG_0496.JPG',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/IMG_0497.JPG',
  'https://campangphotobucket.s3.us-east-2.amazonaws.com/campphoto/IMG_0505.JPG',
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
  for (var i = 1; i < 151; i++) {
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
    .catch((err) => console.log(err));
};
insertSampleCamp();
