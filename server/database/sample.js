const Photo = require('./photo.js');
var samplephoto = new Photo({
  url:
    'https://images.unsplash.com/photo-1592390140955-b250e159744a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  user: {
    username: 'Jing',
    profile_pic_url:
      'https://images.unsplash.com/photo-1585412506320-63e4cbebe138?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  location: 'Shanghai',
  description: 'Testing',
  createdAt: '2017-11-14T05:57:26.037Z',
});

samplephoto
  .save((err, photo) => {
    if (err) {
      console.log(err);
    } else {
      console.log(photo);
    }
  })
  .then(() => db.disconnect());
