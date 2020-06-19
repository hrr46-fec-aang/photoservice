const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

var campSchema = new mongoose.Schema({
  id: String, //starting at 1
  location: String,
  photos: [
    {
      url: String,
      user: {
        username: String,
        profile_pic_url: String,
      },
      description: String,
      thumbs: { type: Number, default: 0 },
      date: Date,
    },
  ],
});

const Camp = mongoose.model('Camp', campSchema);
module.exports = Camp;
