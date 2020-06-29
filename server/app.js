const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const Camp = require('./database/Camp.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/:id', express.static(path.resolve(__dirname + '/../public')));

app.get('/site/:id', (req, res) => {
  var campid = req.params.id;
  Camp.find({ id: campid }).exec((err, campsite) => {
    if (err) {
      res.status(404).send('Failed to find campsite');
    } else {
      res.status(200).json(campsite);
    }
  });
});

app.put('/site/:id/:photoid/:liked', (req, res) => {
  var campid = req.params.id;
  var photoid = req.params.photoid;
  var liked = Number(req.params.liked);
  Camp.findOneAndUpdate(
    { id: campid, 'photos._id': photoid },
    { $inc: { 'photos.$.thumbs': liked } },
    { new: true }
  ).exec((err, photo) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json(photo);
    }
  });
});

module.exports = app;
