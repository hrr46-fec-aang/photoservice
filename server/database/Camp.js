const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

var campSchema = new mongoose.Schema({
  id: { type: String, unique: true }, //starting at 1
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
