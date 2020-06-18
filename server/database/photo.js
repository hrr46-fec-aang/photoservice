const mongoose = require('mongoose');
const db = require('./index.js');

const photoSchema = new mongoose.Schema(
  {
    url: String,
    user: {
      username: String,
      profile_pic_url: String,
    },
    location: String,
    description: String,
    thumbs: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;
